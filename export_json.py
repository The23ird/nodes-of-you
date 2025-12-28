
import re
import csv
import io
import json

# FILE CONFIG
SQL_FILE = "mock_data.sql"
JSON_FILE = "dashboard_data.json"

def parse_sql_values(line):
    match = re.search(r"VALUES \((.*)\);", line)
    if not match: return None
    raw_content = match.group(1)
    f = io.StringIO(raw_content)
    reader = csv.reader(f, quotechar="'", delimiter=',', skipinitialspace=True)
    try:
        return next(reader)
    except:
        return None

nodes = []
profiles = []
ledger = []

with open(SQL_FILE, "r") as f:
    for line in f:
        if "INSERT INTO nodes" in line:
            # id, public_key, zk_hash, tier_level
            vals = parse_sql_values(line)
            if vals and len(vals) >= 4: 
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

data = {
    "nodes": nodes,
    "profiles": profiles,
    "ledger": ledger
}

with open(JSON_FILE, "w") as f:
    json.dump(data, f, indent=2)

print(f"Exported {len(nodes)} nodes, {len(profiles)} profiles, {len(ledger)} txs to {JSON_FILE}")
