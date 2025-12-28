// Internationalization (i18n) Module for Nodes of You
// Supports 10+ major African languages

const i18n = {
    // Current language
    currentLang: 'en',

    // Supported languages with their names
    languages: {
        'en': 'English',
        'fr': 'Français',
        'ar': 'العربية',
        'sw': 'Kiswahili',
        'ha': 'Hausa',
        'am': 'አማርኛ',
        'yo': 'Yorùbá',
        'ig': 'Igbo',
        'zu': 'isiZulu',
        'pt': 'Português'
    },

    // Translation dictionaries
    translations: {
        en: {
            // Header & Navigation
            appTitle: 'Nodes of You',
            appSubtitle: 'Lifting you up to the sky. Prove your identity anonymously for the podcast.',
            languageLabel: 'Language',
            cryptoEducationBtn: 'What is Crypto?',

            // Form Labels
            whatsappLabel: 'WhatsApp Contact',
            whatsappPlaceholder: '+234 XXX XXX XXXX',
            nicknameLabel: 'Nickname / Identifier (Optional)',
            nicknamePlaceholder: 'Your preferred name',
            ageLabel: 'Age',
            locationLabel: 'Location',
            regionLabel: 'Africa Region',
            ageBracketLabel: 'Age Bracket',
            genderLabel: 'Gender (Optional)',
            yearLabel: 'Year Started Crypto',
            holdingsLabel: 'Crypto Holdings ($)',

            // Region Options
            regionEast: 'East Africa',
            regionWest: 'West Africa',
            regionNorth: 'North Africa',
            regionSouth: 'South Africa',
            regionIslands: 'Islands',

            // Gender Options
            genderMale: 'Male',
            genderFemale: 'Female',
            genderNonBinary: 'Non-binary',
            genderPreferNot: 'Prefer not to say',

            // Verification Section
            verificationTitle: 'Verification (Optional but Recommended)',
            idUploadLabel: 'Upload Government ID',
            idUploadBtn: 'Choose ID File',
            walletConnectBtn: 'Connect Wallet',
            walletUploadLabel: 'Upload Balance Screenshot',
            walletUploadBtn: 'Choose Screenshot',
            validatorLabel: 'Node Operator / Validator Proof (Optional)',
            validatorUploadBtn: 'Choose Validator Proof',

            // Submit Button
            submitBtn: 'Generate ZK Proof',

            // Processing Overlay
            processingTitle: 'Lifting Off...',
            processingStatus: 'Generating zero-knowledge proof...',

            // Result Card
            resultTitle: 'Verified Guest Status',
            resultProofHash: 'ZK-PROOF-HASH',
            validationLevel: 'Validation Level',
            leadContact: 'Lead Contact',
            govIdStatus: 'Gov ID Status',
            walletProof: 'Wallet Proof',
            nodeOperator: 'Node Operator',
            regionLocation: 'Region / Location',
            verified: '✓ verified',
            secured: '✓ Secured',
            failed: '✗ failed',

            // Validation Levels
            level0: 'Level 0: Self-Reported',
            level1: 'Level 1: Partially Verified',
            level2: 'Level 2: Fully Verified',

            // Reward Tiers
            tier0: 'Dust',
            tier1: 'Crescent',
            tier2: 'Gibbous',
            tier3: 'Full Moon',

            // Research Footer
            researchThanks: 'Thanks for contributing to our research at',
            researchAppreciate: ', we appreciate your present and future contributions. Note that all that is needed is your ZK proof which is added to your identifier.',
            researchUpgrade: 'If you have future upgrades to your data you can fill the',
            researchLink: 'surdatics form',
            researchBot: 'that will be sent to you via our WhatsApp bot, and rewards will be sent to your Aleo address attached to your ZK proof.',

            // Crypto Education Modal
            cryptoModalTitle: 'What is Crypto?',
            cryptoIntro: 'Cryptocurrency is digital money that works on the internet. Unlike regular money controlled by banks and governments, crypto is decentralized—meaning no single person or institution controls it.',
            cryptoKey1: 'Digital Wallets',
            cryptoKey1Desc: 'Store your crypto in a digital wallet, like a bank account on your phone.',
            cryptoKey2: 'Blockchain',
            cryptoKey2Desc: 'A public ledger that records all transactions securely and transparently.',
            cryptoKey3: 'Zero-Knowledge Proofs',
            cryptoKey3Desc: 'Prove things about yourself (like your age or location) without revealing your personal data.',
            cryptoLearnMore: 'Want to learn more?',
            cryptoLevelBeginner: 'Beginner',
            cryptoLevelIntermediate: 'Intermediate',
            cryptoLevelPro: 'Pro',
            cryptoClose: 'Close',

            // Language Confirmation
            langDetected: 'We detected your language as',
            langConfirm: 'Would you like to continue in',
            langSwitch: 'Switch Language',
            langStay: 'Stay in English'
        },

        fr: {
            // Header & Navigation
            appTitle: 'Nodes of You',
            appSubtitle: 'Vous élever vers le ciel. Prouvez votre identité de manière anonyme pour le podcast.',
            languageLabel: 'Langue',
            cryptoEducationBtn: 'Qu\'est-ce que la Crypto?',

            // Form Labels
            whatsappLabel: 'Contact WhatsApp',
            whatsappPlaceholder: '+33 X XX XX XX XX',
            nicknameLabel: 'Surnom / Identifiant (Optionnel)',
            nicknamePlaceholder: 'Votre nom préféré',
            ageLabel: 'Âge',
            locationLabel: 'Localisation',
            regionLabel: 'Région Africaine',
            ageBracketLabel: 'Tranche d\'âge',
            genderLabel: 'Genre (Optionnel)',
            yearLabel: 'Année de Début Crypto',
            holdingsLabel: 'Avoirs Crypto ($)',

            // Region Options
            regionEast: 'Afrique de l\'Est',
            regionWest: 'Afrique de l\'Ouest',
            regionNorth: 'Afrique du Nord',
            regionSouth: 'Afrique du Sud',
            regionIslands: 'Îles',

            // Gender Options
            genderMale: 'Homme',
            genderFemale: 'Femme',
            genderNonBinary: 'Non-binaire',
            genderPreferNot: 'Préfère ne pas dire',

            // Verification Section
            verificationTitle: 'Vérification (Optionnel mais Recommandé)',
            idUploadLabel: 'Télécharger une Pièce d\'Identité',
            idUploadBtn: 'Choisir le Fichier ID',
            walletConnectBtn: 'Connecter le Portefeuille',
            walletUploadLabel: 'Télécharger une Capture d\'Écran du Solde',
            walletUploadBtn: 'Choisir la Capture',
            validatorLabel: 'Preuve Opérateur de Nœud / Validateur (Optionnel)',
            validatorUploadBtn: 'Choisir la Preuve',

            // Submit Button
            submitBtn: 'Générer la Preuve ZK',

            // Processing Overlay
            processingTitle: 'Décollage...',
            processingStatus: 'Génération de la preuve à divulgation nulle...',

            // Result Card
            resultTitle: 'Statut Invité Vérifié',
            resultProofHash: 'HASH-PREUVE-ZK',
            validationLevel: 'Niveau de Validation',
            leadContact: 'Contact Principal',
            govIdStatus: 'Statut ID Gouvernement',
            walletProof: 'Preuve Portefeuille',
            nodeOperator: 'Opérateur de Nœud',
            regionLocation: 'Région / Localisation',
            verified: '✓ vérifié',
            secured: '✓ Sécurisé',
            failed: '✗ échoué',

            // Validation Levels
            level0: 'Niveau 0: Auto-déclaré',
            level1: 'Niveau 1: Partiellement Vérifié',
            level2: 'Niveau 2: Entièrement Vérifié',

            // Reward Tiers
            tier0: 'Poussière',
            tier1: 'Croissant',
            tier2: 'Gibbeuse',
            tier3: 'Pleine Lune',

            // Research Footer
            researchThanks: 'Merci de contribuer à notre recherche chez',
            researchAppreciate: ', nous apprécions vos contributions présentes et futures. Notez que tout ce dont nous avons besoin est votre preuve ZK qui est ajoutée à votre identifiant.',
            researchUpgrade: 'Si vous avez des mises à jour futures de vos données, vous pouvez remplir le',
            researchLink: 'formulaire surdatics',
            researchBot: 'qui vous sera envoyé via notre bot WhatsApp, et les récompenses seront envoyées à votre adresse Aleo attachée à votre preuve ZK.',

            // Crypto Education Modal
            cryptoModalTitle: 'Qu\'est-ce que la Crypto?',
            cryptoIntro: 'La crypto-monnaie est de l\'argent numérique qui fonctionne sur internet. Contrairement à l\'argent régulier contrôlé par les banques et les gouvernements, la crypto est décentralisée—ce qui signifie qu\'aucune personne ou institution unique ne la contrôle.',
            cryptoKey1: 'Portefeuilles Numériques',
            cryptoKey1Desc: 'Stockez votre crypto dans un portefeuille numérique, comme un compte bancaire sur votre téléphone.',
            cryptoKey2: 'Blockchain',
            cryptoKey2Desc: 'Un registre public qui enregistre toutes les transactions de manière sécurisée et transparente.',
            cryptoKey3: 'Preuves à Divulgation Nulle',
            cryptoKey3Desc: 'Prouvez des choses sur vous (comme votre âge ou votre localisation) sans révéler vos données personnelles.',
            cryptoLearnMore: 'Vous voulez en savoir plus?',
            cryptoLevelBeginner: 'Débutant',
            cryptoLevelIntermediate: 'Intermédiaire',
            cryptoLevelPro: 'Pro',
            cryptoClose: 'Fermer',

            // Language Confirmation
            langDetected: 'Nous avons détecté votre langue comme',
            langConfirm: 'Souhaitez-vous continuer en',
            langSwitch: 'Changer de Langue',
            langStay: 'Rester en Anglais'
        },

        ar: {
            // Header & Navigation
            appTitle: 'نودز أوف يو',
            appSubtitle: 'نرفعك إلى السماء. أثبت هويتك بشكل مجهول للبودكاست.',
            languageLabel: 'اللغة',
            cryptoEducationBtn: 'ما هي العملات الرقمية؟',

            // Form Labels
            whatsappLabel: 'واتساب',
            whatsappPlaceholder: '+20 XXX XXX XXXX',
            nicknameLabel: 'اللقب / المعرّف (اختياري)',
            nicknamePlaceholder: 'اسمك المفضل',
            ageLabel: 'العمر',
            locationLabel: 'الموقع',
            regionLabel: 'المنطقة الأفريقية',
            ageBracketLabel: 'الفئة العمرية',
            genderLabel: 'الجنس (اختياري)',
            yearLabel: 'سنة البدء بالعملات الرقمية',
            holdingsLabel: 'ممتلكات العملات الرقمية ($)',

            // Region Options
            regionEast: 'شرق أفريقيا',
            regionWest: 'غرب أفريقيا',
            regionNorth: 'شمال أفريقيا',
            regionSouth: 'جنوب أفريقيا',
            regionIslands: 'الجزر',

            // Gender Options
            genderMale: 'ذكر',
            genderFemale: 'أنثى',
            genderNonBinary: 'غير ثنائي',
            genderPreferNot: 'أفضل عدم الإفصاح',

            // Verification Section
            verificationTitle: 'التحقق (اختياري لكن موصى به)',
            idUploadLabel: 'تحميل هوية حكومية',
            idUploadBtn: 'اختر ملف الهوية',
            walletConnectBtn: 'ربط المحفظة',
            walletUploadLabel: 'تحميل لقطة شاشة الرصيد',
            walletUploadBtn: 'اختر اللقطة',
            validatorLabel: 'إثبات مشغل العقدة / المدقق (اختياري)',
            validatorUploadBtn: 'اختر الإثبات',

            // Submit Button
            submitBtn: 'إنشاء إثبات المعرفة الصفرية',

            // Processing Overlay
            processingTitle: 'الإقلاع...',
            processingStatus: 'جاري إنشاء إثبات المعرفة الصفرية...',

            // Result Card
            resultTitle: 'حالة الضيف المؤكد',
            resultProofHash: 'تجزئة-الإثبات-ZK',
            validationLevel: 'مستوى التحقق',
            leadContact: 'جهة الاتصال',
            govIdStatus: 'حالة الهوية الحكومية',
            walletProof: 'إثبات المحفظة',
            nodeOperator: 'مشغل العقدة',
            regionLocation: 'المنطقة / الموقع',
            verified: '✓ مؤكد',
            secured: '✓ محفوظ',
            failed: '✗ فشل',

            // Validation Levels
            level0: 'المستوى 0: مصرّح ذاتياً',
            level1: 'المستوى 1: مؤكد جزئياً',
            level2: 'المستوى 2: مؤكد كلياً',

            // Reward Tiers
            tier0: 'غبار',
            tier1: 'هلال',
            tier2: 'أحدب',
            tier3: 'بدر',

            // Research Footer
            researchThanks: 'شكراً لمساهمتك في بحثنا في',
            researchAppreciate: '، نقدر مساهماتك الحالية والمستقبلية. لاحظ أن كل ما نحتاجه هو إثبات ZK الخاص بك والذي يُضاف إلى معرّفك.',
            researchUpgrade: 'إذا كان لديك تحديثات مستقبلية لبياناتك، يمكنك ملء',
            researchLink: 'نموذج surdatics',
            researchBot: 'الذي سيتم إرساله إليك عبر بوت واتساب الخاص بنا، وسيتم إرسال المكافآت إلى عنوان Aleo الخاص بك المرفق بإثبات ZK.',

            // Crypto Education Modal
            cryptoModalTitle: 'ما هي العملات الرقمية؟',
            cryptoIntro: 'العملة الرقمية هي نقود رقمية تعمل على الإنترنت. على عكس النقود العادية التي تسيطر عليها البنوك والحكومات، العملات الرقمية لامركزية—مما يعني أنه لا يوجد شخص أو مؤسسة واحدة تتحكم بها.',
            cryptoKey1: 'المحافظ الرقمية',
            cryptoKey1Desc: 'احفظ عملاتك الرقمية في محفظة رقمية، مثل حساب مصرفي على هاتفك.',
            cryptoKey2: 'البلوكشين',
            cryptoKey2Desc: 'دفتر أستاذ عام يسجل جميع المعاملات بشكل آمن وشفاف.',
            cryptoKey3: 'إثباتات المعرفة الصفرية',
            cryptoKey3Desc: 'أثبت أشياء عن نفسك (مثل عمرك أو موقعك) دون الكشف عن بياناتك الشخصية.',
            cryptoLearnMore: 'تريد معرفة المزيد؟',
            cryptoLevelBeginner: 'مبتدئ',
            cryptoLevelIntermediate: 'متوسط',
            cryptoLevelPro: 'محترف',
            cryptoClose: 'إغلاق',

            // Language Confirmation
            langDetected: 'اكتشفنا لغتك كـ',
            langConfirm: 'هل تريد الاستمرار في',
            langSwitch: 'تغيير اللغة',
            langStay: 'البقاء بالإنجليزية'
        },

        sw: {
            // Header & Navigation
            appTitle: 'Nodes of You',
            appSubtitle: 'Tukuinua hadi angani. Thibitisha utambulisho wako bila kujulikana kwa podcast.',
            languageLabel: 'Lugha',
            cryptoEducationBtn: 'Kripto ni Nini?',

            // Form Labels
            whatsappLabel: 'WhatsApp',
            whatsappPlaceholder: '+254 XXX XXX XXX',
            nicknameLabel: 'Jina la Utani / Kitambulisho (Si Lazima)',
            nicknamePlaceholder: 'Jina unalopendelea',
            ageLabel: 'Umri',
            locationLabel: 'Mahali',
            regionLabel: 'Mkoa wa Afrika',
            ageBracketLabel: 'Kikundi cha Umri',
            genderLabel: 'Jinsia (Si Lazima)',
            yearLabel: 'Mwaka wa Kuanza Kripto',
            holdingsLabel: 'Mali ya Kripto ($)',

            // Region Options
            regionEast: 'Afrika Mashariki',
            regionWest: 'Afrika Magharibi',
            regionNorth: 'Afrika Kaskazini',
            regionSouth: 'Afrika Kusini',
            regionIslands: 'Visiwa',

            // Gender Options
            genderMale: 'Mwanaume',
            genderFemale: 'Mwanamke',
            genderNonBinary: 'Si Jozi',
            genderPreferNot: 'Sipendelei kusema',

            // Submit Button
            submitBtn: 'Tengeneza Uthibitisho wa ZK',

            // Processing Overlay
            processingTitle: 'Kuondoka...',
            processingStatus: 'Kutengeneza uthibitisho wa maarifa sifuri...',

            // Result Card
            resultTitle: 'Hali ya Mgeni Iliyothibitishwa',
            validationLevel: 'Kiwango cha Uthibitishaji',
            verified: '✓ imethibitishwa',
            secured: '✓ Imelindwa',

            // Crypto Education Modal
            cryptoModalTitle: 'Kripto ni Nini?',
            cryptoIntro: 'Kripto ni pesa za kidijitali zinazofanya kazi kwenye mtandao. Tofauti na pesa za kawaida zinazodhibitiwa na benki na serikali, kripto ni pasenti—maana yake hakuna mtu mmoja au taasisi moja inayoidhibiti.',
            cryptoKey1: 'Pochi za Kidijitali',
            cryptoKey1Desc: 'Hifadhi kripto yako katika pochi ya kidijitali, kama akaunti ya benki kwenye simu yako.',
            cryptoKey2: 'Blockchain',
            cryptoKey2Desc: 'Daftari la umma linalorejesha miamala yote kwa usalama na uwazi.',
            cryptoKey3: 'Uthibitisho wa Maarifa Sifuri',
            cryptoKey3Desc: 'Thibitisha mambo kukuhusu (kama umri au mahali ulipo) bila kufichua data yako binafsi.',
            cryptoClose: 'Funga'
        },

        ha: {
            // Header & Navigation
            appTitle: 'Nodes of You',
            appSubtitle: 'Muna ɗaga ku zuwa sama. Tabbatar da ainihin ku ba tare da bayyanawa ba don podcast.',
            languageLabel: 'Harshe',
            cryptoEducationBtn: 'Menene Crypto?',

            // Form Labels
            whatsappLabel: 'WhatsApp',
            whatsappPlaceholder: '+234 XXX XXX XXXX',
            nicknameLabel: 'Suna / Alamar (Ba Dole Ba)',
            nicknamePlaceholder: 'Sunan da kuke so',
            ageLabel: 'Shekaru',
            locationLabel: 'Wuri',
            regionLabel: 'Yankin Afirka',

            // Region Options
            regionEast: 'Gabashin Afirka',
            regionWest: 'Yammacin Afirka',
            regionNorth: 'Arewacin Afirka',
            regionSouth: 'Kudancin Afirka',
            regionIslands: 'Tsibiran',

            // Submit Button
            submitBtn: 'Ƙirƙiri Tabbacin ZK',

            // Crypto Education Modal
            cryptoModalTitle: 'Menene Crypto?',
            cryptoIntro: 'Crypto kuɗi ne na dijital wanda ke aiki akan Intanet. Ba kamar kuɗin yau da kullun da bankuna da gwamnatoci ke sarrafa ba, crypto yana da rarraba—ma\'ana babu mutum ɗaya ko cibiya ɗaya da ke sarrafa shi.',
            cryptoClose: 'Rufe'
        },

        am: {
            // Header & Navigation
            appTitle: 'Nodes of You',
            appSubtitle: 'ወደ ሰማይ እናነሳዎታለን። ለፖድካስት የማንነትዎን ማረጋገጫ በማንነት ይስጡ።',
            languageLabel: 'ቋንቋ',
            cryptoEducationBtn: 'ክሪፕቶ ምንድን ነው?',

            // Form Labels
            whatsappLabel: 'ዋትስአፕ',
            whatsappPlaceholder: '+251 XXX XXX XXX',
            nicknameLabel: 'የቅጽል ስም / መለያ (አማራጭ)',
            ageLabel: 'እድሜ',
            locationLabel: 'ቦታ',

            // Submit Button
            submitBtn: 'የZK ማረጋገጫ ፍጠር',

            // Crypto Education Modal
            cryptoModalTitle: 'ክሪፕቶ ምንድን ነው?',
            cryptoIntro: 'ክሪፕቶ በኢንተርኔት ላይ የሚሰራ ዲጂታል ገንዘብ ነው። በባንኮች እና መንግስታት ከሚቆጣጠሩ መደበኛ ገንዘቦች በተለየ፣ ክሪፕቶ ያልተማከለ ነው—ማለትም አንድም ሰው ወይም ተቋም አይቆጣጠርም።',
            cryptoClose: 'ዝጋ'
        },

        yo: {
            // Header & Navigation
            appTitle: 'Nodes of You',
            appSubtitle: 'A ń gbé ọ sókè sí ọ̀run. Fihàn ìdánimọ̀ rẹ láìfi ara hàn fún podcast.',
            languageLabel: 'Èdè',
            cryptoEducationBtn: 'Kíni Crypto?',

            // Form Labels
            whatsappLabel: 'WhatsApp',
            whatsappPlaceholder: '+234 XXX XXX XXXX',
            nicknameLabel: 'Orúkọ Ìpamọ́ / Ìdánimọ̀ (Àṣàyàn)',
            ageLabel: 'Ọjọ́ Orí',
            locationLabel: 'Ibùdó',

            // Submit Button
            submitBtn: 'Ṣe Ìdánimọ̀ ZK',

            // Crypto Education Modal
            cryptoModalTitle: 'Kíni Crypto?',
            cryptoIntro: 'Crypto jẹ́ owó díjítà tí ń ṣiṣẹ́ lórí íńtánẹ́ẹ̀tì. Kò dà bí owó tọ̀rọ̀gbà tí àwọn ilé-ìfowópamọ́ àti ìjọba ń ṣàkóso, crypto jẹ́ aláìníṣàkóso àárín—èyí túmọ̀ sí pé kò sí ẹni kan tàbí ilé-iṣẹ́ kan tó ń ṣe àkóso rẹ̀.',
            cryptoClose: 'Tì'
        },

        ig: {
            // Header & Navigation
            appTitle: 'Nodes of You',
            appSubtitle: 'Anyị na-ebuli gị elu na mbara igwe. Gosipụta onwe gị na nzuzo maka podcast.',
            languageLabel: 'Asụsụ',
            cryptoEducationBtn: 'Gịnị bụ Crypto?',

            // Form Labels
            whatsappLabel: 'WhatsApp',
            whatsappPlaceholder: '+234 XXX XXX XXXX',
            nicknameLabel: 'Aha Mpempe Akwụkwọ / Njirimara (Nhọrọ)',
            ageLabel: 'Afọ',
            locationLabel: 'Ebe',

            // Submit Button
            submitBtn: 'Mepụta Ihe Akaebe ZK',

            // Crypto Education Modal
            cryptoModalTitle: 'Gịnị bụ Crypto?',
            cryptoIntro: 'Crypto bụ ego dijitalụ na-arụ ọrụ na ịntanetị. N\'ụzọ dị iche na ego nkịtị nke ụlọ akụ na gọọmentị na-achịkwa, crypto bụ nke a na-enweghị otu ebe—nke pụtara na ọ dịghị otu onye ma ọ bụ ụlọ ọrụ na-achịkwa ya.',
            cryptoClose: 'Mechie'
        },

        zu: {
            // Header & Navigation
            appTitle: 'Nodes of You',
            appSubtitle: 'Siyakuphakamisa ezulwini. Qinisekisa ubunikazi bakho ngokungaphatheki ku-podcast.',
            languageLabel: 'Ulimi',
            cryptoEducationBtn: 'Yini i-Crypto?',

            // Form Labels
            whatsappLabel: 'I-WhatsApp',
            whatsappPlaceholder: '+27 XXX XXX XXXX',
            nicknameLabel: 'Igama Lesibongo / Isikhombi (Ukukhetha)',
            ageLabel: 'Iminyaka',
            locationLabel: 'Indawo',

            // Submit Button
            submitBtn: 'Yakha Ubufakazi be-ZK',

            // Crypto Education Modal
            cryptoModalTitle: 'Yini i-Crypto?',
            cryptoIntro: 'I-Crypto yimali yedijithali esebenza ku-inthanethi. Ngokungafani nemali evamile elawulwa amabhange nohulumeni, i-crypto ayihlangene ndawonye—okusho ukuthi akekho umuntu oyedwa noma inhlangano eyodwa eyilawulayo.',
            cryptoClose: 'Vala'
        },

        pt: {
            // Header & Navigation
            appTitle: 'Nodes of You',
            appSubtitle: 'Elevando você ao céu. Prove sua identidade anonimamente para o podcast.',
            languageLabel: 'Idioma',
            cryptoEducationBtn: 'O que é Cripto?',

            // Form Labels
            whatsappLabel: 'WhatsApp',
            whatsappPlaceholder: '+258 XXX XXX XXX',
            nicknameLabel: 'Apelido / Identificador (Opcional)',
            nicknamePlaceholder: 'Seu nome preferido',
            ageLabel: 'Idade',
            locationLabel: 'Localização',
            regionLabel: 'Região Africana',
            ageBracketLabel: 'Faixa Etária',
            genderLabel: 'Gênero (Opcional)',
            yearLabel: 'Ano de Início na Cripto',
            holdingsLabel: 'Patrimônio em Cripto ($)',

            // Region Options
            regionEast: 'África Oriental',
            regionWest: 'África Ocidental',
            regionNorth: 'África do Norte',
            regionSouth: 'África do Sul',
            regionIslands: 'Ilhas',

            // Gender Options
            genderMale: 'Masculino',
            genderFemale: 'Feminino',
            genderNonBinary: 'Não-binário',
            genderPreferNot: 'Prefiro não dizer',

            // Submit Button
            submitBtn: 'Gerar Prova ZK',

            // Processing Overlay
            processingTitle: 'Decolando...',
            processingStatus: 'Gerando prova de conhecimento zero...',

            // Result Card
            resultTitle: 'Status de Convidado Verificado',
            validationLevel: 'Nível de Validação',
            verified: '✓ verificado',
            secured: '✓ Seguro',

            // Crypto Education Modal
            cryptoModalTitle: 'O que é Cripto?',
            cryptoIntro: 'A criptomoeda é dinheiro digital que funciona na internet. Ao contrário do dinheiro comum controlado por bancos e governos, a cripto é descentralizada—o que significa que nenhuma pessoa ou instituição única a controla.',
            cryptoKey1: 'Carteiras Digitais',
            cryptoKey1Desc: 'Armazene sua cripto em uma carteira digital, como uma conta bancária no seu telefone.',
            cryptoKey2: 'Blockchain',
            cryptoKey2Desc: 'Um livro-razão público que registra todas as transações de forma segura e transparente.',
            cryptoKey3: 'Provas de Conhecimento Zero',
            cryptoKey3Desc: 'Prove coisas sobre você (como sua idade ou localização) sem revelar seus dados pessoais.',
            cryptoLearnMore: 'Quer saber mais?',
            cryptoLevelBeginner: 'Iniciante',
            cryptoLevelIntermediate: 'Intermediário',
            cryptoLevelPro: 'Profissional',
            cryptoClose: 'Fechar'
        }
    },

    // Language detection based on browser settings
    detectLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();

        // Check if the detected language is supported
        if (this.languages.hasOwnProperty(langCode)) {
            return langCode;
        }

        // Default to English if language not supported
        return 'en';
    },

    // Set the current language
    setLanguage(lang) {
        if (this.languages.hasOwnProperty(lang)) {
            this.currentLang = lang;
            localStorage.setItem('nodesOfYouLang', lang);
            this.updatePageText();
        }
    },

    // Get translation for a key
    t(key) {
        return this.translations[this.currentLang][key] || this.translations['en'][key] || key;
    },

    // Update all text on the page
    updatePageText() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);

            // Update text content or placeholder/value based on element type
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.getAttribute('placeholder')) {
                    element.setAttribute('placeholder', translation);
                }
            } else if (element.tagName === 'SELECT') {
                // Handle select options separately
            } else {
                element.textContent = translation;
            }
        });

        // Update select options
        this.updateSelectOptions();

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;

        // Handle RTL for Arabic
        if (this.currentLang === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
    },

    // Update select dropdown options
    updateSelectOptions() {
        // Region select
        const regionSelect = document.getElementById('region');
        if (regionSelect) {
            const options = regionSelect.querySelectorAll('option');
            options.forEach(option => {
                if (option.value === 'East') option.textContent = this.t('regionEast');
                if (option.value === 'West') option.textContent = this.t('regionWest');
                if (option.value === 'North') option.textContent = this.t('regionNorth');
                if (option.value === 'South') option.textContent = this.t('regionSouth');
                if (option.value === 'Islands') option.textContent = this.t('regionIslands');
            });
        }

        // Gender select
        const genderSelect = document.getElementById('gender');
        if (genderSelect) {
            const options = genderSelect.querySelectorAll('option');
            options.forEach(option => {
                if (option.value === 'male') option.textContent = this.t('genderMale');
                if (option.value === 'female') option.textContent = this.t('genderFemale');
                if (option.value === 'non-binary') option.textContent = this.t('genderNonBinary');
                if (option.value === 'prefer-not') option.textContent = this.t('genderPreferNot');
            });
        }
    },

    // Initialize i18n
    init() {
        // Check for saved language preference
        const savedLang = localStorage.getItem('nodesOfYouLang');

        if (savedLang && this.languages.hasOwnProperty(savedLang)) {
            this.currentLang = savedLang;
        } else {
            // Auto-detect language
            this.currentLang = this.detectLanguage();

            // Show confirmation if not English
            if (this.currentLang !== 'en') {
                this.showLanguageConfirmation();
            }
        }

        this.updatePageText();
    },

    // Show language confirmation dialog
    showLanguageConfirmation() {
        const langName = this.languages[this.currentLang];
        const message = `${this.t('langDetected')} ${langName}. ${this.t('langConfirm')} ${langName}?`;

        // Create a simple confirmation dialog (can be styled later)
        setTimeout(() => {
            if (confirm(message)) {
                this.setLanguage(this.currentLang);
            } else {
                this.setLanguage('en');
            }
        }, 500);
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = i18n;
}
