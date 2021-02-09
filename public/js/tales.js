class Tale {
    constructor(id, age, duration, offset, title, reader) {
        let id2 = (id).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        let id3 = (id).toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false });
        this.duration = duration;
        this.offset = offset;
        this.reader = reader;
        this.title = title;
        this.id = `tale-${id2}`;

        this.stream = `https://kazky.suspilne.media/tales/songs/${id2}.mp3`;
        this.image = `/images/tales/t${id3}.jpg`;
    }

    add() {
        var talesDiv = document.getElementById("tales");
        var taleElement = document.createElement("div");
        let tale = this;

        taleElement.id = this.id;
        talesDiv.appendChild(taleElement);

        taleElement.innerHTML = `
            <div class="tale" style="position: relative;">
                <img class="tale-image">
                <img class="play-btn" src="/images/play.png">
                <div class="tale-title text"></div>
                <div class="tale-reader text"></div>
                <div class="tale-duration text"></div>
            </div>`;

        document.querySelector(`div#${this.id} img.tale-image`).src = this.image;
        document.querySelector(`div#${this.id} img.play-btn`).onclick = function() { play(tale); };
        document.querySelector(`div#${this.id} div.tale-title`).textContent = this.title;
        document.querySelector(`div#${this.id} div.tale-reader`).textContent = this.reader;
        document.querySelector(`div#${this.id} div.tale-duration`).textContent = this.duration;
    }
}

function play(tale) {
    let audio = document.getElementById("audio");

    if (nowPlaying === tale.id) {
        nowPlaying = 0;
        lastPlaying = tale.id;
        offset = audio.currentTime * 1000;

        audio.pause();
    } else {
        let next = getNext(tale);
        let audioOffset = (lastPlaying === tale.id) ? offset/1000 : tale.offset/1000;

        audio.src = `${tale.stream}#t=${audioOffset}`;
        audio.play();
        audio.addEventListener("ended", function () { play(next); });

        nowPlaying = tale.id;
        lastPlaying = tale.id;
    }

    setPlayBtn();
}

function getNext(tale) {
    for (let i = 0; i < tales.length - 1; i++) {
        if (tales[i].id === tale.id) return tales[i + 1];
    }

    return tales[0];
}

function setPlayBtn() {
    tales.forEach(tale => {
        document.querySelector(`div#${tale.id} img.play-btn`).src
            = (tale.id == nowPlaying) ? "/images/pause.png" : "/images/play.png";
    });
}


class ReadersData {
    constructor(){
        this.anastasiia_gudyma = 'Анастасія Гудима';
        this.anastasiia_gudyma_description = 'Керівниця Координаційного центру національних меншин ПАТ НСТУ';
        this.andrii_hlyvniuk = 'Андрій Хливнюк';
        this.andrii_hlyvniuk_description = 'Вокаліст гурту \'Бумбокс\'';
        this.alina_pash = 'Аліна Паш';
        this.alina_pash_description = 'Співачка';
        this.alyona_alyona = 'Alyona Alyona';
        this.alyona_alyona_description = 'Хіп-хоп виконавиця';
        this.evgen_klopotenko = 'Євген Клопотенко';
        this.evgen_klopotenko_description = 'Ресторатор';
        this.evgen_maluha = 'Євген Малуха';
        this.evgen_maluha_description = 'Актор театру, кіно та дубляжу';
        this.anna_nikitina = 'Анна Нікітіна';
        this.anna_nikitina_description = 'Солістка гурту Dakh Daughters';
        this.dmytro_horkin = 'Дмитро Хоркін';
        this.dmytro_horkin_description = 'Радіоведучий';
        this.dmytro_schebetiuk = 'Дмитро Щебетюк';
        this.dmytro_schebetiuk_description = 'Телеведучій, журналіст';
        this.ivan_marunych = 'Іван Марунич';
        this.ivan_marunych_description = 'Співак';
        this.inna_grebeniuk = 'Інна Гребенюк';
        this.inna_grebeniuk_description = 'Членкиня правління ПАТ НСТУ';
        this.julia_jurina = 'Юлія Юріна';
        this.julia_jurina_description = 'Учасниця гурту \'YUKO\'';
        this.jaroslav_lodygin = 'Ярослав Лодигін';
        this.jaroslav_lodygin_description = 'Кінорежисер';
        this.jamala = 'Jamala';
        this.jamala_description = 'Співачка';
        this.katia_rogova = 'Катя Рогова';
        this.katia_rogova_description = 'Співачка INAIA';
        this.kateryna_ofliyan = 'Катерина Офліян';
        this.kateryna_ofliyan_description = 'Співачка, гурт Ofliyan';
        this.michel_schur = 'Майкл Щур';
        this.michel_schur_description = 'Телеведучій';
        this.mariana_golovko = 'Мар\'яна Головко';
        this.mariana_golovko_description = 'Співачка, акторка';
        this.marko_galanevych = 'Марко Галаневич';
        this.marko_galanevych_description = 'Учасник гурту \'Dakhabraha\'';
        this.marta_liubchyk = 'Марта Любчик';
        this.marta_liubchyk_description = 'Співачка, гурт Правиця';
        this.marusia_ionova = 'Маруся Іонова';
        this.marusia_ionova_description = 'Акторка, учасниця гурту \'ЦеШо\'';
        this.nata_smirnova = 'Ната Смірнова';
        this.nata_smirnova_description = 'Співачка, учасниця гурту \'PUR:PUR\'';
        this.oleg_moskalenko = 'Олег Москаленко';
        this.oleg_moskalenko_description = 'Актор';
        this.oleksiy_dorychevsky = 'Олексій Доричевський';
        this.oleksiy_dorychevsky_description = 'Актор';
        this.olga_shurova = 'Оля Шурова';
        this.olga_shurova_description = 'Учасниця гурту Pianoboy';
        this.pavlo_varenitsa = 'Павло Варєніца';
        this.pavlo_varenitsa_description = 'Фронтмет гурту \'Epolets\'';
        this.roman_yasynovsky = 'Роман Ясиновський';
        this.roman_yasynovsky_description = 'Актор';
        this.rosava = 'Росава';
        this.rosava_description = 'Співачка';
        this.ruslana_khazipova = 'Руслана Хазіпова';
        this.ruslana_khazipova_description = 'Солістка гурту Dakh Daughters';
        this.sasha_koltsova = 'Саша Кольцова';
        this.sasha_koltsova_description = 'Лідерка гурту \'Крихітка\'';
        this.sergii_zhadan = 'Сергій Жадан';
        this.sergii_zhadan_description = 'Поет і письменник';
        this.sergii_kolos = 'Сергій Колос';
        this.sergii_kolos_description = 'Фронтмен гурту Фіолет';
        this.sergii_tanchynets = 'Сергій Танчинець';
        this.sergii_tanchynets_description = 'Гурт Без Обмежень';
        this.solomia_melnyk = 'Соломія Мельник';
        this.solomia_melnyk_description = 'Солістка гурту Dakh Daughters';
        this.stas_koroliov = 'Стас Корольов';
        this.stas_koroliov_description = 'Учасник гурту \'YUKO\'';
        this.timur_miroshnychenko = 'Тімур Мірошниченко';
        this.timur_miroshnychenko_description = 'Телеведучій';
        this.hrystyna_soloviy = 'Христина Соловій';
        this.hrystyna_soloviy_description = 'Співачка';
        this.vlad_fisun = 'Влад Фісун';
        this.vlad_fisun_description = 'Діджей Dj Buro';
        this.vova_zi_lvova = 'Vova zi Lvova';
        this.vova_zi_lvova_description = 'Хіп-хоп виконавець';
        }
}

nowPlaying = 0;
lastPlaying = 0;
offset = 0;
readers = new ReadersData();
tales = [
    new Tale(1, 'FOR_BABIES', '02:04', 7200, 'Заєць хвалько', readers.andrii_hlyvniuk),
    new Tale(2, 'FOR_BOTH', '02:28', 7200, 'Лис, цап і мішок моркви', readers.andrii_hlyvniuk),
    new Tale(3, 'FOR_KIDS', '02:10', 8200, 'Чому кенгуру стрибає', readers.andrii_hlyvniuk),
    new Tale(4, 'FOR_BABIES', '01:11', 7500, 'Бджола рятує гусці життя', readers.marko_galanevych),
    new Tale(5, 'FOR_BOTH', '01:50', 7000, 'Жаба боязкіша за зайця', readers.marko_galanevych),
    new Tale(6, 'FOR_BABIES', '02:31', 6500, 'Лисиця і Рак', readers.alina_pash),
    new Tale(7, 'FOR_KIDS', '02:34', 7000, 'Сонячна квітка', readers.sasha_koltsova),
    new Tale(8, 'FOR_BABIES', '00:48', 7000, 'Чому кіт умивається тільки по обіді', readers.sasha_koltsova),
    new Tale(9, 'FOR_BABIES', '01:44', 7000, 'Як лис вовка маслом частував', readers.sasha_koltsova),
    new Tale(10, 'FOR_BABIES', '02:15', 7000, 'Мишача рада', readers.evgen_maluha),
    new Tale(11, 'FOR_BOTH', '02:15', 8200, 'Кошеня й мишеня', readers.evgen_maluha),
    new Tale(12, 'FOR_BABIES', '03:01', 6500, 'Як курочка півника врятувала', readers.evgen_maluha),
    new Tale(13, 'FOR_KIDS', '03:20', 6800, 'Черепаха і олень', readers.sergii_zhadan),
    new Tale(14, 'FOR_KIDS', '03:53', 6700, 'Іссумбосі', readers.sergii_zhadan),
    new Tale(15, 'FOR_KIDS', '05:01', 6900, 'Гарна дружина', readers.sergii_zhadan),
    new Tale(16, 'FOR_KIDS', '09:11', 7700, 'Том Тіт Тот', readers.hrystyna_soloviy),
    new Tale(17, 'FOR_KIDS', '12:33', 6500, 'Чарівне горнятко', readers.hrystyna_soloviy),
    new Tale(18, 'FOR_KIDS', '07:36', 7200, 'Просинка', readers.hrystyna_soloviy),
    new Tale(19, 'FOR_BABIES', '04:03', 6700, 'Колобок', readers.oleksiy_dorychevsky),
    new Tale(20, 'FOR_BABIES', '02:59', 6500, 'Лисичка та Журавель', readers.oleksiy_dorychevsky),
    new Tale(21, 'FOR_BABIES', '05:05', 6700, 'Рукавичка', readers.oleksiy_dorychevsky),
    new Tale(22, 'FOR_BABIES', '04:42', 6200, 'Дві білочки', readers.alina_pash),
    new Tale(23, 'FOR_BABIES', '09:56', 7500, 'Коза-дереза', readers.julia_jurina),
    new Tale(24, 'FOR_BABIES', '01:03', 6300, 'Курочка ряба', readers.julia_jurina),
    new Tale(25, 'FOR_BABIES', '04:27', 6500, 'Ріпка', readers.marta_liubchyk),
    new Tale(26, 'FOR_BABIES', '04:51', 6300, 'Пан Коцький', readers.alyona_alyona),
    new Tale(27, 'FOR_BABIES', '02:51', 6200, 'Лисичка суддя', readers.alina_pash),
    new Tale(28, 'FOR_KIDS', '03:03', 6500, 'Як пан по німецькому балакав', readers.mariana_golovko),
    new Tale(29, 'FOR_KIDS', '04:14', 6200, 'Заморське яйце', readers.dmytro_schebetiuk),
    new Tale(30, 'FOR_BABIES', '02:51', 6000, 'Казка про билинку та горобця', readers.dmytro_schebetiuk),
    new Tale(31, 'FOR_KIDS', '06:30', 6000, 'Золота пшениця', readers.jaroslav_lodygin),
    new Tale(32, 'FOR_BOTH', '06:31', 6500, 'Кривенька качечка', readers.julia_jurina),
    new Tale(33, 'FOR_BABIES', '02:01', 6500, 'Хитрий півень', readers.mariana_golovko),
    new Tale(34, 'FOR_KIDS', '01:58', 6500, 'Як соловейко чоловіка розуму навчив', readers.michel_schur),
    new Tale(35, 'FOR_KIDS', '05:27', 6550, 'Голе телятко', readers.jaroslav_lodygin),
    new Tale(36, 'FOR_KIDS', '04:36', 6500, 'Розум та щастя', readers.jaroslav_lodygin),
    new Tale(37, 'FOR_BABIES', '03:19', 6300, 'Колосок', readers.alyona_alyona),
    new Tale(38, 'FOR_KIDS', '04:58', 7000, 'Як дурень випросив вогню', readers.mariana_golovko),
    new Tale(39, 'FOR_BABIES', '02:39', 7000, 'Котик та півник', readers.alyona_alyona),
    new Tale(40, 'FOR_KIDS', '02:39', 6600, 'Чому зайці сірі', readers.dmytro_schebetiuk),
    new Tale(41, 'FOR_KIDS', '05:09', 6500, 'Круглячок', readers.marta_liubchyk),
    new Tale(42, 'FOR_KIDS', '05:11', 6500, 'Чабанець', readers.marta_liubchyk),
    new Tale(43, 'FOR_KIDS', '04:13', 6200, 'Казка про липку і зажерливу бабу', readers.michel_schur),
    new Tale(44, 'FOR_BABIES', '02:51', 6150, 'Чому гуси миються у воді', readers.ruslana_khazipova),
    new Tale(45, 'FOR_KIDS', '07:04', 5700, 'Іван Побиван', readers.ruslana_khazipova),
    new Tale(46, 'FOR_BABIES', '02:31', 6700, 'Коржик', readers.ruslana_khazipova),
    new Tale(47, 'FOR_BABIES', '01:32', 7000, 'Лисичка і глечик', readers.vova_zi_lvova),
    new Tale(48, 'FOR_BOTH', '01:43', 6850, 'Старий дуб і діброва', readers.vova_zi_lvova),
    new Tale(49, 'FOR_KIDS', '04:55', 7200, 'Золотий мак', readers.evgen_klopotenko),
    new Tale(50, 'FOR_KIDS', '04:25', 6300, 'Котик', readers.marusia_ionova),
    new Tale(51, 'FOR_KIDS', '03:42', 7300, 'Про найцінніше', readers.evgen_klopotenko),
    new Tale(52, 'FOR_KIDS', '06:20', 6850, 'Хто не робить той не їсть', readers.evgen_klopotenko),
    new Tale(53, 'FOR_KIDS', '08:52', 5700, 'Дарунки з трьох зернин', readers.marusia_ionova),
    new Tale(54, 'FOR_KIDS', '06:48', 6800, 'Три персні', readers.marusia_ionova),
    new Tale(55, 'FOR_KIDS', '02:50', 6000, 'Про бідного багача', readers.solomia_melnyk),
    new Tale(56, 'FOR_KIDS', '04:47', 6600, 'Казка про чемного кушніра', readers.solomia_melnyk),
    new Tale(57, 'FOR_BABIES', '02:36', 6700, 'Війна грибів з жуками', readers.solomia_melnyk),
    new Tale(58, 'FOR_BOTH', '01:53', 6600, 'Вовк та вовчиця', readers.solomia_melnyk),
    new Tale(59, 'FOR_BOTH', '02:28', 6500, 'Орел і кріт', readers.anna_nikitina),
    new Tale(60, 'FOR_BABIES', '02:16', 6250, 'Сніжниця', readers.anna_nikitina),
    new Tale(61, 'FOR_KIDS', '03:27', 6500, 'Цап та баран', readers.anna_nikitina),
    new Tale(62, 'FOR_BOTH', '04:05', 6600, 'Казка про чоловіка і Данила Бурмила', readers.vova_zi_lvova),
    new Tale(63, 'FOR_BABIES', '01:52', 6350, 'Лисиця та їжак', readers.roman_yasynovsky),
    new Tale(64, 'FOR_KIDS', '07:20', 7200, 'Льодяне царство', readers.roman_yasynovsky),
    new Tale(65, 'FOR_BABIES', '02:10', 6500, 'Нерозумне кошеня', readers.roman_yasynovsky),
    new Tale(66, 'FOR_KIDS', '03:01', 6500, 'Про щасливого бідняка і нещасного пана', readers.vlad_fisun),
    new Tale(67, 'FOR_BABIES', '01:24', 6300, 'Як журавель помирив мишу з жабою', readers.vlad_fisun),
    new Tale(68, 'FOR_KIDS', '02:34', 6500, 'Хліб і золото', readers.vlad_fisun),
    new Tale(69, 'FOR_KIDS', '03:27', 6700, 'Три бажання', readers.timur_miroshnychenko),
    new Tale(70, 'FOR_KIDS', '06:10', 6300, 'Про неробу Юрка', readers.timur_miroshnychenko),
    new Tale(71, 'FOR_BOTH', '04:14', 6300, 'Калиточка', readers.timur_miroshnychenko),
    new Tale(72, 'FOR_BABIES', '01:43', 6250, 'Олень, черепаха і птах', readers.pavlo_varenitsa),
    new Tale(73, 'FOR_BOTH', '01:54', 6700, 'Вовк під вікном', readers.pavlo_varenitsa),
    new Tale(74, 'FOR_BABIES', '01:30', 6550, 'Бджоли та ведмідь', readers.pavlo_varenitsa),
    new Tale(75, 'FOR_BABIES', '02:10', 6500, 'Журавель та чапля', readers.sergii_kolos),
    new Tale(76, 'FOR_BABIES', '02:00', 6350, 'Хвалькувата муха', readers.sergii_kolos),
    new Tale(77, 'FOR_KIDS', '08:37', 5500, 'Вівчар Василько і золоті гори', readers.sergii_kolos),
    new Tale(78, 'FOR_KIDS', '03:54', 6000, 'Чому тигр такий злий на кота', readers.stas_koroliov),
    new Tale(79, 'FOR_BOTH', '04:55', 7000, 'Як Джек ходив щастя шукати', readers.stas_koroliov),
    new Tale(80, 'FOR_BABIES', '03:31', 6000, 'Як жаби подорожували', readers.stas_koroliov),
    new Tale(81, 'FOR_BOTH', '06:58', 5700, 'Полохлива душа', readers.katia_rogova),
    new Tale(82, 'FOR_KIDS', '05:39', 6000, 'Чому в ластівки хвостик, мов ріжки', readers.katia_rogova),
    new Tale(83, 'FOR_KIDS', '09:23', 6000, 'Вразливий шустик', readers.katia_rogova),
    new Tale(84, 'FOR_KIDS', '09:02', 5500, 'Пензлик маляна', readers.ivan_marunych),
    new Tale(85, 'FOR_KIDS', '04:45', 6800, 'Кінь, що літати вмів', readers.ivan_marunych),
    new Tale(86, 'FOR_KIDS', '04:48', 6500, 'Лісовики', readers.ivan_marunych),
    new Tale(87, 'FOR_BABIES', '04:53', 6500, 'Звідки взялися місяць та зорі на небі', readers.nata_smirnova),
    new Tale(88, 'FOR_KIDS', '09:14', 5500, 'Кмітлива дівчина', readers.nata_smirnova),
    new Tale(89, 'FOR_KIDS', '11:32', 5600, 'Три брати і жаба', readers.nata_smirnova),
    new Tale(90, 'FOR_KIDS', '12:18', 5750, 'Кентен і муха', readers.oleg_moskalenko),
    new Tale(91, 'FOR_KIDS', '05:54', 5400, 'І на силу знайдеться сила', readers.oleg_moskalenko),
    new Tale(92, 'FOR_KIDS', '06:44', 5800, 'Який гук такий відгук', readers.oleg_moskalenko),
    new Tale(93, 'FOR_KIDS', '07:39', 7200, 'Замок на скелі', readers.rosava),
    new Tale(94, 'FOR_BABIES', '02:45', 6800, 'Поросяче життя', readers.rosava),
    new Tale(95, 'FOR_KIDS', '08:00', 7000, 'Умілі руки', readers.rosava),
    new Tale(96, 'FOR_BABIES', '02:37', 6600, 'Материнська любов', readers.jamala),
    new Tale(97, 'FOR_KIDS', '01:59', 6500, 'Задавака', readers.jamala),
    new Tale(98, 'FOR_KIDS', '06:30', 6300, 'Золота колиска', readers.jamala),
    new Tale(99, 'FOR_KIDS', '01:56', 6700, 'Віслюк-мудрагель', readers.sergii_tanchynets),
    new Tale(100, 'FOR_KIDS', '02:09', 6500, 'Виноградар і змія', readers.sergii_tanchynets),
    new Tale(101, 'FOR_KIDS', '04:42', 6700, 'Золота прядочка', readers.sergii_tanchynets),
    new Tale(102, 'FOR_KIDS', '07:54', 7300, 'Синя свита навиворіт пошита', readers.inna_grebeniuk),
    new Tale(103, 'FOR_KIDS', '04:27', 6500, 'Зароблений карбованець', readers.inna_grebeniuk),
    new Tale(104, 'FOR_KIDS', '05:39', 6000, 'Як лікувати лінь', readers.inna_grebeniuk),
    new Tale(105, 'FOR_KIDS', '04:57', 6800, 'Як пес вовка в чоботи взув', readers.olga_shurova),
    new Tale(106, 'FOR_BOTH', '01:46', 6200, 'Кінь і віл', readers.olga_shurova),
    new Tale(107, 'FOR_KIDS', '03:50', 6300, 'Сто золотих монет', readers.olga_shurova),
    new Tale(108, 'FOR_KIDS', '01:43', 6500, 'Ром і водяник', readers.anastasiia_gudyma),
    new Tale(109, 'FOR_KIDS', '05:10', 6500, 'Наймит, кухар і пан', readers.anastasiia_gudyma),
    new Tale(110, 'FOR_BOTH', '02:37', 6850, 'Сім лозин', readers.anastasiia_gudyma),
    new Tale(111, 'FOR_KIDS', '10:00', 7500, 'Подарунки чаклуна', readers.dmytro_horkin),
    new Tale(112, 'FOR_KIDS', '10:26', 5500, 'Пані Метелиця', readers.dmytro_horkin),
    new Tale(113, 'FOR_KIDS', '11:33', 5500, 'Круглий камінь', readers.dmytro_horkin),
    new Tale(114, 'FOR_KIDS', '06:01', 6500, 'Балакір і хазяїн', readers.dmytro_horkin),
    new Tale(115, 'FOR_BOTH', '04:55', 7800, 'Вовк і лисиця', readers.kateryna_ofliyan),
    new Tale(116, 'FOR_KIDS', '05:52', 6000, 'Чарівне джерело', readers.kateryna_ofliyan),
    new Tale(117, 'FOR_BOTH', '03:16', 7400, 'Хто найстарший', readers.kateryna_ofliyan),
]
