
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
            vals = parse_sql_values(line)
            if vals and len(vals) >= 4: 
                nodes.append({"id": vals[0], "tier": int(vals[3])})
            
        elif "INSERT INTO encrypted_profiles" in line:
            # Revised schema: id, wa_hash, country, region, age, exp_year, candidate, holdings, staking, validator
            vals = parse_sql_values(line)
            # We need to be careful with index if schema changed. 
            # Looking at generator: 
            # 0: id, 1: wa, 2: country, 3: region, 4: age, 5: year, 6: candidate, 7: holdings, 8: staking, 9: validator
            if vals and len(vals) >= 10: 
                profiles.append({
                    "id": vals[0], 
                    "country": vals[2], 
                    "region": vals[3],
                    "age": vals[4],
                    "exp_year": int(vals[5]),
                    "candidate": vals[6] == 'TRUE',
                    "holdings": float(vals[7]),
                    "staked": float(vals[8]),
                    "is_validator": vals[9] == 'TRUE'
                })

        elif "INSERT INTO revenue_ledger" in line:
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

print(f"Exported {len(nodes)} nodes, {len(profiles)} profiles to {JSON_FILE}")
