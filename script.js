// ==========================================
// 1. قاعدة بيانات المنتجات (The Database)
// ==========================================

const database = {
    cleansers: [
        { name: "StarVille Whitening Cleanser", type: ["oily", "combination"], budget: "economic", active: "خلاصة العرقسوس وفيتامين سي", note: "ممتاز للتفتيح اليومي ولا يسبب جفاف شديد للبشرة الدهنية." },
        { name: "Vacation Cleanser", type: ["oily", "combination"], budget: "economic", active: "حمض الساليسيليك وزيت شجرة الشاي", note: "ينظف المسام بعمق ممتاز للحبوب، يُفضل استخدامه مرتين يومياً." },
        { name: "Cerave Foaming Cleanser", type: ["oily", "normal"], budget: "medium", active: "سيراميد، نياسيناميد، هيالورونيك", note: "يحافظ على حاجز البشرة وينظم الإفرازات، خالي من العطور." },
        { name: "La Roche-Posay Effaclar Purifying Foaming Gel", type: ["oily", "combination"], budget: "medium", active: "زنك بيكولينات، مياه حرارية", note: "ينقي البشرة بلطف ومثالي للبشرة المعرضة لحب الشباب الشديد." },
        { name: "Cerave Hydrating Cleanser", type: ["dry", "normal"], budget: "medium", active: "سيراميد وهيالورونيك أسيد", note: "ينظف دون أن يجرد البشرة من زيوتها الطبيعية، قوامه لوشن غير رغوي." },
        { name: "Eva B-White Facial Wash", type: ["dry", "normal"], budget: "economic", active: "بروتينات اللبن، ترمس", note: "اقتصادي جداً ولطيف على البشرة الجافة ويساعد في التفتيح المؤقت." },
        { name: "Cetaphil Gentle Skin Cleanser", type: ["dry", "normal", "combination"], budget: "medium", active: "جلسرين، نياسيناميد", note: "لطيف جداً ومناسب للبشرة الحساسة والتي تخضع لعلاجات تقشير." }
    ],
    serums: [
        { name: "Eva Niacinamide 5% + Zinc 1%", concern: "acne", budget: "economic", active: "نياسيناميد 5%، زنك 1%", note: "تركيز ممتاز للمبتدئين، ينظم إفراز الدهون ويقلل مظهر المسام والآثار." },
        { name: "Vacation Niacinamide 10%", concern: "acne", budget: "medium", active: "نياسيناميد 10%", note: "تركيز علاجي قوي لآثار الحبوب العميقة، يُفضل إدخاله في الروتين تدريجياً لتجنب التحسس." },
        { name: "The Ordinary Salicylic Acid 2%", concern: "acne", budget: "medium", active: "حمض الساليسيليك 2%", note: "مقشر BHA يخترق المسام لتنظيفها من الدهون المسببة للحبوب، يستخدم 2-3 مرات أسبوعياً مساءً." },
        { name: "Natavis Brightening Serum", concern: "pigmentation", budget: "medium", active: "ألفا أربوتين، نياسيناميد", note: "مزيج تفتيح قوي وآمن، يمنع تكوين الميلانين المسبب للتصبغات." },
        { name: "Dermaelle Lightening Serum", concern: "pigmentation", budget: "economic", active: "كوجيك أسيد، فيتامين سي", note: "يعالج البقع الداكنة والتصبغات الناتجة عن الشمس أو آثار الحبوب القديمة." },
        { name: "Natavis Vitamin C 10%", concern: "pigmentation", budget: "medium", active: "فيتامين سي نقي", note: "مضاد أكسدة قوي يعطي نضارة فورية، يجب وضعه صباحاً قبل واقي الشمس لزيادة فعاليته." },
        { name: "The Ordinary Hyaluronic Acid 2% + B5", concern: "dryness", budget: "medium", active: "حمض الهيالورونيك، فيتامين B5", note: "يسحب الرطوبة لداخل طبقات الجلد، يجب وضعه على بشرة منداة (مبللة قليلاً)." },
        { name: "L'Oreal Paris Revitalift Hyaluronic Acid", concern: "dryness", budget: "medium", active: "هيالورونيك أسيد جزيئات صغيرة", note: "سريع الامتصاص ويعالج الخطوط الدقيقة الناتجة عن الجفاف الشديد." },
        { name: "Eva Skin Clinic Hyaluronic Acid", concern: "dryness", budget: "economic", active: "هيالورونيك أسيد", note: "بديل اقتصادي ممتاز للحفاظ على ترطيب ونضارة البشرة اليومية." }
    ],
    moisturizers: [
        { name: "Shaan Soothing Gel", type: ["oily", "combination"], budget: "economic", active: "ألانتوين، بانثينول", note: "قوامه جل خفيف جداً، سريع الامتصاص، ولا يسبب سد المسام أو زيادة الحبوب." },
        { name: "Sebamed Clear Face Care Gel", type: ["oily", "acne"], budget: "medium", active: "حمض الهيالورونيك، صبار", note: "خالي من الزيوت تماماً، يحافظ على درجة حموضة البشرة pH 5.5 لحمايتها من البكتيريا." },
        { name: "Cerave PM Facial Moisturizing Lotion", type: ["oily", "combination", "normal"], budget: "medium", active: "نياسيناميد، سيراميد", note: "مرطب ليلي خفيف يرمم حاجز البشرة المتضرر من علاجات حب الشباب." },
        { name: "Cerave Moisturizing Cream", type: ["dry", "normal"], budget: "medium", active: "سيراميد، حمض الهيالورونيك", note: "قوام كريمي غني، يحبس الترطيب لفترات طويلة وممتاز للبشرة شديدة الجفاف." },
        { name: "Macro Panthenol Cream", type: ["dry"], budget: "economic", active: "ديكسابانثينول", note: "كريم طبي اقتصادي يعالج الجفاف الشديد والقشور، قد يكون ثقيلاً على البشرة الدهنية." },
        { name: "Neutrogena Hydro Boost Water Gel", type: ["combination", "normal", "dry"], budget: "medium", active: "هيالورونيك أسيد", note: "يروي عطش البشرة بقوام مائي خفيف يمتص في ثوانٍ." }
    ],
    sunblocks: [
        { name: "Bobai Extra Lightening Gel", type: ["oily", "combination"], budget: "economic", active: "فلاتر حماية كيميائية وفيزيائية", note: "عامل حماية 50+، قوامه جل مناسب للبشرة الدهنية ولا يترك أثر أبيض (White cast)." },
        { name: "La Roche-Posay Anthelios Dry Touch", type: ["oily", "combination"], budget: "medium", active: "فلاتر متقدمة، مكسوريل", note: "حماية فائقة، يتحكم في اللمعان (مات) ومثالي لأيام الصيف الحارة." },
        { name: "Kolagra Sunscreen Gel", type: ["oily", "combination"], budget: "economic", active: "فلاتر حماية متوازنة", note: "خفيف على البشرة وسريع الامتصاص، خيار يومي اقتصادي ممتاز." },
        { name: "Bobai Sunscreen Lotion", type: ["dry", "normal"], budget: "economic", active: "فلاتر حماية، مرطبات", note: "يوفر حماية جيدة مع نسبة ترطيب تمنع جفاف البشرة أثناء التعرض للشمس." },
        { name: "La Roche-Posay Anthelios Hydrating Cream", type: ["dry", "normal"], budget: "medium", active: "فلاتر متقدمة، مياه حرارية", note: "قوام كريمي مرطب، مثالي للبشرة الجافة والحساسة." }
    ]
};

// ==========================================
// 2. محرك الفلترة الذكي (The Engine)
// ==========================================

function filterProducts(category, filterKey, filterValue, budget) {
    // تصفية المنتجات بناءً على الفئة (نوع البشرة أو المشكلة) والميزانية
    let filtered = category.filter(product => {
        let matchFilter = Array.isArray(product[filterKey]) ? product[filterKey].includes(filterValue) : product[filterKey] === filterValue;
        let matchBudget = product.budget === budget;
        return matchFilter && matchBudget;
    });

    // لو مفيش منتج مطابق للميزانية دي بالظبط، هات أي منتج بيعالج نفس المشكلة/البشرة
    if (filtered.length === 0) {
        filtered = category.filter(product => {
            return Array.isArray(product[filterKey]) ? product[filterKey].includes(filterValue) : product[filterKey] === filterValue;
        });
    }

    // اختيار أول منتج من القائمة المفلترة (ممكن نطورها مستقبلاً تختار عشوائي لتنويع النتائج)
    return filtered.length > 0 ? filtered[0] : null;
}

// ==========================================
// 3. التفاعل مع المستخدم (Event Listener)
// ==========================================

document.getElementById('generate-btn').addEventListener('click', function() {
    const skinType = document.getElementById('skin-type').value;
    const concern = document.getElementById('skin-concern').value;
    const budget = document.getElementById('budget').value;
    const resultSection = document.getElementById('result-section');

    if (skinType === 'none' || concern === 'none' || budget === 'none') {
        alert('يرجى استكمال جميع البيانات لتشخيص الروتين بدقة.');
        return;
    }

    // زر التحميل لعمل تأثير احترافي
    const btn = this;
    const originalText = btn.innerHTML;
    btn.innerHTML = 'جاري تحليل البيانات صيدلانياً... ⏳';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    setTimeout(() => {
        // تشغيل محرك الفلترة
        const selectedCleanser = filterProducts(database.cleansers, 'type', skinType, budget);
        const selectedSerum = filterProducts(database.serums, 'concern', concern, budget);
        
        // تعديل بسيط: لو البشرة دهنية وفيها حبوب، بنوجه المرطب لحاجة مخصصة للحبوب لو متاحة
        let moisturizerType = (skinType === 'oily' && concern === 'acne') ? 'acne' : skinType;
        let selectedMoisturizer = filterProducts(database.moisturizers, 'type', moisturizerType, budget);
        
        // لو ملقاش مرطب مخصص للحبوب، يرجع يدور على مرطب للبشرة الدهنية العادي
        if(!selectedMoisturizer) selectedMoisturizer = filterProducts(database.moisturizers, 'type', skinType, budget);

        const selectedSunblock = filterProducts(database.sunblocks, 'type', skinType, budget);

        // بناء واجهة النتيجة
        resultSection.innerHTML = `
            <div style="text-align: center; margin-bottom: 20px;">
                <h3 style="color: #2c3e50; font-size: 1.5rem;">✨ الروتين المتكامل المخصص لك ✨</h3>
                <p style="color: #7f8c8d; font-size: 0.9rem;">تمت الفلترة بناءً على التكوين العلمي للمواد الفعالة</p>
            </div>

            <div class="product-card" style="background: #f8fbff; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-right: 4px solid #3498db;">
                <h4 style="color: #3498db; margin-bottom: 5px;">🧼 الخطوة 1: التنظيف (الغسول)</h4>
                <p style="font-weight: bold; font-size: 1.1rem; color: #2c3e50;">${selectedCleanser.name}</p>
                <p style="color: #e67e22; font-size: 0.9rem; font-weight: bold;">المادة الفعالة: ${selectedCleanser.active}</p>
                <p style="font-size: 0.95rem; margin-top: 5px; color: #555;">${selectedCleanser.note}</p>
            </div>

            <div class="product-card" style="background: #fdfaf6; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-right: 4px solid #f1c40f;">
                <h4 style="color: #f39c12; margin-bottom: 5px;">🧪 الخطوة 2: العلاج (السيروم)</h4>
                <p style="font-weight: bold; font-size: 1.1rem; color: #2c3e50;">${selectedSerum.name}</p>
                <p style="color: #e67e22; font-size: 0.9rem; font-weight: bold;">المادة الفعالة: ${selectedSerum.active}</p>
                <p style="font-size: 0.95rem; margin-top: 5px; color: #555;">${selectedSerum.note}</p>
            </div>

            <div class="product-card" style="background: #f4fbf7; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-right: 4px solid #2ecc71;">
                <h4 style="color: #27ae60; margin-bottom: 5px;">💧 الخطوة 3: حماية الحاجز (المرطب)</h4>
                <p style="font-weight: bold; font-size: 1.1rem; color: #2c3e50;">${selectedMoisturizer.name}</p>
                <p style="color: #e67e22; font-size: 0.9rem; font-weight: bold;">المادة الفعالة: ${selectedMoisturizer.active}</p>
                <p style="font-size: 0.95rem; margin-top: 5px; color: #555;">${selectedMoisturizer.note}</p>
            </div>

            <div class="product-card" style="background: #fff5f5; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-right: 4px solid #e74c3c;">
                <h4 style="color: #c0392b; margin-bottom: 5px;">☀️ الخطوة 4: الوقاية (واقي الشمس)</h4>
                <p style="font-weight: bold; font-size: 1.1rem; color: #2c3e50;">${selectedSunblock.name}</p>
                <p style="color: #e67e22; font-size: 0.9rem; font-weight: bold;">المادة الفعالة: ${selectedSunblock.active}</p>
                <p style="font-size: 0.95rem; margin-top: 5px; color: #555;">${selectedSunblock.note}</p>
            </div>

            <div style="margin-top: 25px; padding: 15px; background-color: #2c3e50; color: white; border-radius: 8px; text-align: center;">
                <p style="margin-bottom: 10px; font-size: 1.1rem;">هل أنت مستعد لبدء رحلة العناية ببشرتك؟</p>
                <button style="background-color: #e67e22; color: white; border: none; padding: 12px 25px; font-size: 1.1rem; border-radius: 5px; font-weight: bold; cursor: pointer; font-family: 'Cairo', sans-serif;" onclick="window.open('https://www.amazon.eg', '_blank')">🛒 اطلب المنتجات الآن</button>
            </div>
        `;

        // إظهار النتيجة وإرجاع الزرار لشكله الطبيعي
        resultSection.classList.remove('hidden');
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        btn.innerHTML = 'حلل بشرتي الآن 🔍';
        btn.disabled = false;
        btn.style.opacity = '1';

    }, 800); // تأخير زمني بسيط لإعطاء إيحاء بتحليل البيانات
});
