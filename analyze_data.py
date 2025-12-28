import re
import collections
import csv
import io

# FILE CONFIG
SQL_FILE = "mock_data.sql"

def parse_sql_values(line):
    # Extract the content inside VALUES (...)
    match = re.search(r"VALUES \((.*)\);", line)
    if not match: return None
    
    # Use csv reader to handle the SQL-style quoting (roughly)
    # We replace ' with " to make it standard CSV friendly if needed, 
    # but strictly SQL uses ' for strings.
    # Hack: let's just use csv with quotechar="'" and skip initial space
    raw_content = match.group(1)
    
    # Simulating a file object for csv.reader
    f = io.StringIO(raw_content)
    reader = csv.reader(f, quotechar="'", delimiter=',', skipinitialspace=True)
    try:
        return next(reader)
    except:
        return None

print("--- 📊 NODES OF YOU: DATA INTELLIGENCE REPORT ---")

nodes = []
profiles = []
ledger = []

with open(SQL_FILE, "r") as f:
    for line in f:
        if "INSERT INTO nodes" in line:
            # id, public_key, zk_hash, tier_level
            vals = parse_sql_values(line)
            if vals and len(vals) >= 4: 
                # vals[3] is tier.
                nodes.append({"id": vals[0], "tier": int(vals[3])})
            
        elif "INSERT INTO encrypted_profiles" in line:
            # id, wa_hash, country, region, age, exp_year, candidate
            vals = parse_sql_values(line)
            if vals and len(vals) >= 7: 
                profiles.append({
                    "id": vals[0], 
                    "country": vals[2], 
                    "region": vals[3],
                    "age": vals[4],
                    "exp_year": int(vals[5]),
                    "candidate": vals[6] == 'TRUE'
                })

        elif "INSERT INTO revenue_ledger" in line:
            # node_id, amount, source, status
            vals = parse_sql_values(line)
            if vals and len(vals) >= 4:
                ledger.append({
                    "node_id": vals[0],
                    "amount": float(vals[1]),
                    "source": vals[2],
                    "status": vals[3]
                })

# --- INSIGHTS ---

# 1. GEOSPATIAL
country_counts = collections.Counter(p['country'] for p in profiles)
if country_counts:
    top_country = country_counts.most_common(1)[0]
    total_users = len(nodes)

    print(f"\n🌍 GEOGRAPHIC DISTRIBUTION")
    print(f"Top Market: {top_country[0]} ({top_country[1]} users, {top_country[1]/total_users*100:.1f}%)")
    print("Breakdown:")
    for c, count in country_counts.most_common():
        print(f"  - {c}: {count}")

# 2. FINANCIAL
total_rev = sum(d['amount'] for d in ledger)
paying_users = len(set(d['node_id'] for d in ledger))
if paying_users > 0:
    avg_rev_per_user = total_rev / paying_users
else:
    avg_rev_per_user = 0
    
pending_payouts = sum(d['amount'] for d in ledger if d['status'] == 'Pending')

print(f"\n💰 ECONOMY SNAPSHOT")
print(f"Total Economic Value: ${total_rev:,.2f}")
print(f"Active Earners: {paying_users}")
print(f"Average Earnings: ${avg_rev_per_user:.2f} / earner")
print(f"⚠️  Pending Payouts (Liquidity Need): ${pending_payouts:,.2f}")

# 3. USER MATURITY
current_year = 2025
years_exp = [current_year - p['exp_year'] for p in profiles]
if years_exp:
    avg_exp = sum(years_exp) / len(years_exp)
    veterans = len([y for y in years_exp if y > 5])

    print(f"\n🧠 USER SOPHISTICATION")
    print(f"Average Crypto Experience: {avg_exp:.1f} Years")
    print(f"Veterans (>5 years): {veterans} users")

# 4. RECRUITMENT PIPELINES
candidates = [p for p in profiles if p['candidate']]
tier_4 = [n for n in nodes if n['tier'] == 4]
priority = [c for c in candidates if any(n['id'] == c['id'] and n['tier'] == 4 for n in nodes)]

print(f"\n🎙️ INTERVIEW PIPELINE")
print(f"Total Candidates (Opt-in): {len(candidates)}")
print(f"Priority Candidates (Tier 4 + Opt-in): {len(priority)}")
