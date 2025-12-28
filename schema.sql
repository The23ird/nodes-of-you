-- Nodes of You Database Schema
-- Based on DATABASE_DESIGN.md

-- Enable PostGIS for geospatial features
CREATE EXTENSION IF NOT EXISTS postgis;

-- 1. NODES Table (Public Identity)
-- Stores verified entities. No personal data here.
CREATE TABLE nodes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    public_key VARCHAR(255) UNIQUE NOT NULL, -- Wallet Address or ZK Nullifier
    zk_proof_hash JSONB NOT NULL,            -- The proof of humanity/location
    tier_level INT DEFAULT 1 CHECK (tier_level BETWEEN 1 AND 4),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for fast lookup by public key
CREATE INDEX idx_nodes_public_key ON nodes(public_key);

-- 2. ENCRYPTED_PROFILES Table (Private Data)
-- Sensitive data, strictly separated.
CREATE TABLE encrypted_profiles (
    id UUID PRIMARY KEYREFERENCES nodes(id) ON DELETE CASCADE,
    whatsapp_hash VARCHAR(512), -- Encrypted contact info
    country VARCHAR(100),
    region VARCHAR(100),
    age_bracket VARCHAR(20),
    crypto_experience_year INT,
    
    -- Metadata for internal use
    is_interview_candidate BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for scheduling queries (e.g. "Find interview candidates in Nigeria")
CREATE INDEX idx_profiles_country_interview ON encrypted_profiles(country) WHERE is_interview_candidate = TRUE;

-- 3. REVENUE_LEDGER Table (The Economy)
-- Tracks earnings and payouts.
CREATE TABLE revenue_ledger (
    transaction_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    node_id UUID NOT NULL REFERENCES nodes(id),
    amount_usd DECIMAL(10, 2) NOT NULL CHECK (amount_usd >= 0),
    source VARCHAR(50) NOT NULL, -- 'YouTube_RevShare', 'Referral', 'Grant'
    status VARCHAR(20) DEFAULT 'Pending' CHECK (status IN ('Pending', 'Paid', 'Staked', 'Failed')),
    transaction_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    payout_date TIMESTAMP WITH TIME ZONE
);

-- Index for ledger queries
CREATE INDEX idx_ledger_node_status ON revenue_ledger(node_id, status);

-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- Enable RLS
ALTER TABLE encrypted_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE revenue_ledger ENABLE ROW LEVEL SECURITY;

-- Policy: Only the node owner (or admin) can read their own profile
-- Note: This requires an auth system (like Supabase Auth) to set 'auth.uid()'
-- CREATE POLICY "Users can read own profile" ON encrypted_profiles
--     FOR SELECT USING (auth.uid() = id);

-- Comments
COMMENT ON TABLE nodes IS 'Public identities verified by ZK proofs.';
COMMENT ON TABLE encrypted_profiles IS 'Sensitive user data, potentially encrypted.';
COMMENT ON TABLE revenue_ledger IS 'Financial records for the Storytelling Economy.';
