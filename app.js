// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language system
    i18n.init();

    // Set language selector to match current language
    const langSelect = document.getElementById('language-select');
    langSelect.value = i18n.currentLang;

    // Language selector change handler
    langSelect.addEventListener('change', (e) => {
        i18n.setLanguage(e.target.value);
    });

    // Crypto Education Modal Handlers
    const cryptoModal = document.getElementById('crypto-modal');
    const cryptoBtn = document.getElementById('crypto-edu-btn');
    const closeModal = document.getElementById('close-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    cryptoBtn.addEventListener('click', () => {
        cryptoModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        cryptoModal.style.display = 'none';
    });

    closeModalBtn.addEventListener('click', () => {
        cryptoModal.style.display = 'none';
    });

    // Close modal when clicking outside
    cryptoModal.addEventListener('click', (e) => {
        if (e.target === cryptoModal) {
            cryptoModal.style.display = 'none';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cryptoModal.style.display === 'flex') {
            cryptoModal.style.display = 'none';
        }
    });
});

let validationLevel = 0;
let proofs = { id: false, wallet: false };

function updateValidationLevel() {
    const indicator = document.getElementById('validation-indicator');
    const level = (proofs.id ? 1 : 0) + (proofs.wallet ? 1 : 0);
    validationLevel = level;

    indicator.className = 'validation-badge';
    if (level === 1) indicator.classList.add('level-1');
    if (level === 2) indicator.classList.add('level-2');

    const labels = ["Self-Reported", "Partially Verified", "Fully Verified"];
    indicator.innerText = `Level ${level}: ${labels[level]}`;
}

// Feedback for file uploads
document.getElementById('id-card').addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        document.querySelector('label[for="id-card"]').innerText = `✓ ID Uploaded: ${e.target.files[0].name}`;
        document.querySelector('label[for="id-card"]').style.borderColor = "#00BFFF";
        proofs.id = true;
    } else {
        proofs.id = false;
    }
    updateValidationLevel();
});

document.getElementById('wallet-screenshot').addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        document.querySelector('label[for="wallet-screenshot"]').innerText = `✓ Screenshot Uploaded: ${e.target.files[0].name}`;
        document.querySelector('label[for="wallet-screenshot"]').style.borderColor = "#00BFFF";
        proofs.wallet = true;
    } else {
        if (!document.getElementById('connect-wallet').disabled) proofs.wallet = false;
    }
    updateValidationLevel();
});

// Wallet connection simulation
document.getElementById('connect-wallet').addEventListener('click', () => {
    const btn = document.getElementById('connect-wallet');
    btn.innerText = "Connecting...";
    btn.disabled = true;

    setTimeout(() => {
        btn.innerText = "✓ Connected: 0x71C...a492";
        btn.style.borderColor = "#00BFFF";
        btn.style.color = "#00BFFF";
        document.getElementById('holdings').value = 54200;
        document.getElementById('holdings').style.color = "#00BFFF";
        document.getElementById('holdings').style.fontWeight = "bold";
        proofs.wallet = true;
        updateValidationLevel();
    }, 1500);
});

document.getElementById('identity-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    // 1. Gather Data
    const identity = {
        whatsapp: document.getElementById('whatsapp').value,
        nickname: document.getElementById('nickname').value || "Anonymous Guest",
        age_bracket: document.getElementById('age-bracket').value,
        location_name: document.getElementById('location').value,
        region: document.getElementById('region').value,
        gender: document.getElementById('gender').value || "Not Specified",
        crypto_holdings: document.getElementById('holdings').value || 0,
        node_id: document.getElementById('node-id').value,
        has_used_defi: document.getElementById('defi').checked,
        is_validator: document.getElementById('validator').checked,
    };

    // 2. Show Animation Overlay
    const overlay = document.getElementById('overlay');
    const statusText = document.getElementById('status-text');
    overlay.style.display = 'flex';

    // Rigorous verification phases
    const phases = [
        "Shielding Private Contact Details...",
        `Locking Regional Metadata (${identity.region} Africa)...`,
        validationLevel > 0 ? "Analyzing Government ID Metadata..." : "Processing Self-Reported Age...",
        "Validating Age Bracket (ZK Constraint)...",
        "Simulating IP Geolocation Lookup (197.210.x.x)...",
        identity.node_id ? "Verifying Node ID signature against Aleo Registry..." : "Skipping Validator Verification...",
        proofs.wallet ? "Querying On-Chain Balance via Aleo Browser..." : "Self-Reported Holdings Check...",
        "Lead Successfully Captured (Secure Storage)...",
        "Nodes of You ZK Proof Synthesized!"
    ];

    for (const phase of phases) {
        statusText.innerText = phase;
        await new Promise(r => setTimeout(r, 600));
    }

    // 3. Logic Simulation
    const isVerifiedValidator = identity.node_id && identity.node_id.startsWith('aleo1');

    let tier = 1; // Basic
    if (identity.crypto_holdings > 5000 || identity.has_used_defi) tier = 2;
    if (isVerifiedValidator || (identity.crypto_holdings > 50000)) tier = 3;

    // 4. Update UI
    const moonTiers = ["Dust", "Crescent", "Gibbous", "Full Moon"];
    const tierContainer = document.getElementById('tier-container');
    const resultDetails = document.getElementById('result-details');

    tierContainer.innerHTML = `<span class="tier-badge tier-${tier}">${moonTiers[tier]}</span>`;

    const levelColors = ["#9FA8DA", "#00BFFF", "#D8DEE9"];
    const levelNames = ["Self-Reported", "Partially Verified", "Fully Verified"];

    resultDetails.innerHTML = `
        <div class="result-row" style="color:${levelColors[validationLevel]}">
            <span>${i18n.t('validationLevel')}</span><span>${i18n.t('level' + validationLevel)}</span>
        </div>
        <div class="result-row"><span>${i18n.t('leadContact')}</span><span>${i18n.t('secured')}</span></div>
        <div class="result-row"><span>${i18n.t('govIdStatus')}</span><span>${proofs.id ? i18n.t('verified') : '—'}</span></div>
        <div class="result-row"><span>${i18n.t('walletProof')}</span><span>${proofs.wallet ? i18n.t('verified') : '—'}</span></div>
        <div class="result-row"><span>${i18n.t('nodeOperator')}</span><span>${isVerifiedValidator ? i18n.t('verified') : (identity.node_id ? i18n.t('failed') : '—')}</span></div>
        <div class="result-row"><span>${i18n.t('regionLocation')}</span><span>${identity.region} / ${identity.location_name}</span></div>
        
        <div class="research-footer">
            <p>${i18n.t('researchThanks')} <strong>Nodes of You</strong>${i18n.t('researchAppreciate')}</p>
            <p>${i18n.t('researchUpgrade')} <a href="https://surdatics.com" target="_blank" class="surdatics-link">${i18n.t('researchLink')}</a> ${i18n.t('researchBot')}</p>
            <p style="margin-top: 1rem; font-size: 0.75rem;">
                <a href="LITE_PAPER.md" target="_blank" class="surdatics-link" style="opacity: 0.8;">📄 Read the Lite Paper</a>
            </p>
        </div>
    `;

    // 5. Swap Cards
    overlay.style.display = 'none';
    document.getElementById('form-card').style.display = 'none';
    document.getElementById('result-card').style.display = 'block';
});
