const stations = {
    // الخط الأول (حلوان - المرج الجديدة)
    "حلوان": { stations: ["عين حلوان"], line: [1] },
    "عين حلوان": { stations: ["حلوان", "جامعة حلوان"], line: [1] },
    "جامعة حلوان": { stations: ["عين حلوان", "وادي حوف"], line: [1] },
    "وادي حوف": { stations: ["جامعة حلوان", "حدائق حلوان"], line: [1] },
    "حدائق حلوان": { stations: ["وادي حوف", "المعصرة"], line: [1] },
    "المعصرة": { stations: ["حدائق حلوان", "طرة الأسمنت"], line: [1] },
    "طرة الأسمنت": { stations: ["المعصرة", "كوتسيكا"], line: [1] },
    "كوتسيكا": { stations: ["طرة الأسمنت", "طرة البلد"], line: [1] },
    "طرة البلد": { stations: ["كوتسيكا", "ثكنات المعادي"], line: [1] },
    "ثكنات المعادي": { stations: ["طرة البلد", "المعادي"], line: [1] },
    "المعادي": { stations: ["ثكنات المعادي", "حدائق المعادي"], line: [1] },
    "حدائق المعادي": { stations: ["المعادي", "دار السلام"], line: [1] },
    "دار السلام": { stations: ["حدائق المعادي", "الزهراء"], line: [1] },
    "الزهراء": { stations: ["دار السلام", "مار جرجس"], line: [1] },
    "مار جرجس": { stations: ["الزهراء", "الملك الصالح"], line: [1] },
    "الملك الصالح": { stations: ["مار جرجس", "السيدة زينب"], line: [1] },
    "السيدة زينب": { stations: ["الملك الصالح", "سعد زغلول"], line: [1] },
    "سعد زغلول": { stations: ["السيدة زينب", "السادات"], line: [1] },
    "السادات": { stations: ["الأوبرا", "سعد زغلول", "جمال عبد الناصر", "محمد نجيب"], line: [1, 2] }, // محطة تبادلية مع الخط الثاني
    "جمال عبد الناصر": { stations: ["العتبة", "ماسبيرو", "السادات", "أحمد عرابي"], line: [1, 3] }, // محتاج اضيف الخط التالت
    "أحمد عرابي": { stations: ["جمال عبد الناصر", "الشهداء"], line: [1] },
    "الشهداء": { stations: ["مسرة", "أحمد عرابي", "غمرة", "العتبة"], line: [1, 2] }, // محطة تبادلية مع الخط الثاني والثالث
    "غمرة": { stations: ["الشهداء", "الدمرداش"], line: [1] },
    "الدمرداش": { stations: ["غمرة", "منشية الصدر"], line: [1] },
    "منشية الصدر": { stations: ["الدمرداش", "كوبري القبة"], line: [1] },
    "كوبري القبة": { stations: ["منشية الصدر", "حمامات القبة"], line: [1] },
    "حمامات القبة": { stations: ["كوبري القبة", "سراي القبة"], line: [1] },
    "سراي القبة": { stations: ["حمامات القبة", "حدائق الزيتون"], line: [1] },
    "حدائق الزيتون": { stations: ["سراي القبة", "حلمية الزيتون"], line: [1] },
    "حلمية الزيتون": { stations: ["حدائق الزيتون", "المطرية"], line: [1] },
    "المطرية": { stations: ["حلمية الزيتون", "عين شمس"], line: [1] },
    "عين شمس": { stations: ["المطرية", "عزبة النخل"], line: [1] },
    "عزبة النخل": { stations: ["عين شمس", "المرج"], line: [1] },
    "المرج": { stations: ["عزبة النخل", "المرج الجديدة"], line: [1] },
    "المرج الجديدة": { stations: ["المرج"], line: [1] },

    // الخط الثاني (شبرا الخيمة - المنيب)
    "شبرا الخيمة": { stations: ["كلية الزراعة"], line: [2] },
    "كلية الزراعة": { stations: ["شبرا الخيمة", "المظلات"], line: [2] },
    "المظلات": { stations: ["كلية الزراعة", "الخلفاوي"], line: [2] },
    "الخلفاوي": { stations: ["المظلات", "سانت تريزا"], line: [2] },
    "سانت تريزا": { stations: ["الخلفاوي", "روض الفرج"], line: [2] },
    "روض الفرج": { stations: ["سانت تريزا", "مسرة"], line: [2] },
    "مسرة": { stations: ["روض الفرج", "الشهداء"], line: [2] },
    "العتبة": { stations: ["باب الشعرية", "الشهداء", "محمد نجيب", "جمال عبد الناصر"], line: [2, 3] }, // محطة تبادلية مع الخط الثاني
    "محمد نجيب": { stations: ["العتبة", "السادات"], line: [2] },
    "الأوبرا": { stations: ["السادات", "الدقي"], line: [2] },
    "الدقي": { stations: ["البحوث", "الأوبرا"], line: [2] },
    "البحوث": { stations: ["جامعه القاهره", "الدقي"], line: [2] },
    "جامعه القاهره": { stations: ["بولاق الدكرور", "الدقي", "فيصل"], line: [2, 3] },
    "فيصل": { stations: ["جامعه القاهره", "محطة الجيزة"], line: [2] },
    "محطة الجيزة": { stations: ["فيصل", "أم المصريين"], line: [2] },
    "أم المصريين": { stations: ["محطة الجيزة", "ساقية مكي"], line: [2] },
    "ساقية مكي": { stations: ["أم المصريين", "المنيب"], line: [2] },
    "المنيب": { stations: ["ساقية مكي"], line: [2] },

    // الخط الثالث (عدلي منصور - الكيت كات)
    "عدلي منصور": { stations: ["الهايكستب"], line: [3] },
    "الهايكستب": { stations: ["عدلي منصور", "عمر بن الخطاب"], line: [3] },
    "عمر بن الخطاب": { stations: ["الهايكستب", "قباء"], line: [3] },
    "قباء": { stations: ["عمر بن الخطاب", "هشام بركات"], line: [3] },
    "هشام بركات": { stations: ["قباء", "النزهة"], line: [3] },
    "النزهة": { stations: ["هشام بركات", "نادي الشمس"], line: [3] },
    "نادي الشمس": { stations: ["النزهة", "ألف مسكن"], line: [3] },
    "ألف مسكن": { stations: ["نادي الشمس", "ميدان هليوبوليس"], line: [3] },
    "ميدان هليوبوليس": { stations: ["ألف مسكن", "هارون"], line: [3] },
    "هارون": { stations: ["ميدان هليوبوليس", "الأهرام"], line: [3] },
    "الأهرام": { stations: ["هارون", "كلية البنات"], line: [3] },
    "كلية البنات": { stations: ["الأهرام", "الاستاد"], line: [3] },
    "الاستاد": { stations: ["كلية البنات", "أرض المعارض"], line: [3] },
    "أرض المعارض": { stations: ["الاستاد", "العباسية"], line: [3] },
    "العباسية": { stations: ["أرض المعارض", "عبده باشا"], line: [3] },
    "عبده باشا": { stations: ["العباسية", "الجيش"], line: [3] },
    "الجيش": { stations: ["عبده باشا", "باب الشعرية"], line: [3] },
    "باب الشعرية": { stations: ["الجيش", "العتبة"], line: [3] }, // محطة تبادلية مع الخط الثاني
    "ماسبيرو": { stations: ["جمال عبد الناصر", "صفاء حجازي"], line: [3] },
    "صفاء حجازي": { stations: ["ماسبيرو", "الكيت كات"], line: [3] },
    "الكيت كات": { stations: ["التوفيقية", "صفاء حجازي", "السودان"], line: [3] }, // المحطة الحالية مع المحطات المستقبلية
    "السودان": { stations: ["الكيت كات", "إمبابة"], line: [3] }, // تحت الإنشاء
    "إمبابة": { stations: ["السودان", "البوهي"], line: [3] }, // تحت الإنشاء
    "البوهي": { stations: ["إمبابة", "القومية العربية"], line: [3] }, // تحت الإنشاء
    "القومية العربية": { stations: ["البوهي", "الطريق الدائري"], line: [3] }, // تحت الإنشاء
    "الطريق الدائري": { stations: ["القومية العربية", "محور روض الفرج"], line: [3] }, // تحت الإنشاء
    "محور روض الفرج": { stations: ["الطريق الدائري"], line: [3] }, // تحت الإنشاء
    "التوفيقية": { stations: ["وادي النيل", "الكيت كات"], line: [3] },
    "وادي النيل": { stations: ["جامعه الدول العربيه", "التوفيقية"], line: [3] },
    "جامعه الدول العربيه": { stations: ["وادي النيل", "بولاق الدكرور"], line: [3] },
    "بولاق الدكرور": { stations: ["جامعه القاهره", "جامعه الدول العربيه"], line: [3] },
};



const findNearestStation = (currentStation, destination) => {

    const queue = [currentStation];

    const ans = { path: [], lines: [] };

    bfs(destination, queue, new Set([]), ans);
    console.log(ans);

}


const bfs = (destination, queue, visited, ans) => {
    if (queue.includes(destination)) {
        let lines = [];
        for (let i = 0; i < queue.length - 1; i++) {
            for (let l of stations[queue[i]].line) {
                if (stations[queue[i + 1]].line.includes(l)) {
                    lines.push(l)
                }

            }
        }
        lines.push(lines[lines.length - 1])

        if (ans.path.length == 0 || ans.path.length >= queue.length) {

            let length = new Set(lines).size

            if (!(queue.length == ans.path.length && length != 0 && lines.size > length)) {
                ans.path = queue;
                ans.lines = lines;
                // ans.stationsLine = stationsLine;
            }


        }
        return;
    }
    const currentStation = queue[queue.length - 1];
    stations[currentStation].stations.map(s => {
        if (!visited.has(s)) {
            bfs(destination, [...queue, s], new Set([...visited, currentStation]), ans)
        }

    })
    return;
}


function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
            reject(new Error("Geolocation is not supported by this browser."));
        }
    });
}

// getUserLocation().then(val =>{
//     console.log(val);
// }).catch(err => {
//     console.log(err);
// })



const getTicketPrice = (n) => {

    if (n <= 9) {
        return 8;
    } else if (n <= 16) {
        return 10;
    } else if (n <= 23) {
        return 15;
    } else {
        return 20;
    }

}

const addStations = ()=>{
    const ele1 = document.getElementById('current-station');
    const ele2 = document.getElementById('destination-station');


    for (let ele in stations){

        ele1.innerHTML += `<option value="${ele}">${ele}</option>`;
        ele2.innerHTML += `<option value="${ele}">${ele}</option>`;

    }


}

addStations()

$(document).ready(function () {
    $('#current-station').select2({
        placeholder: "من",
        allowClear: true,

    });
});

$(document).ready(function () {
    $('#destination-station').select2({
        placeholder: "الي",
        allowClear: true,

    });


});



document.getElementById("routeButton").addEventListener("click", (e)=>{
    const current = document.getElementById("current-station").value;
    const destination = document.getElementById("destination-station").value;

    if (current && destination){
        findNearestStation(current, destination);
    }
})


// findNearestStation("عدلي منصور", "السادات")