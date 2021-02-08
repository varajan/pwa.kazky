class Tale {
    constructor(id, age, duration, offset, title, reader) {
        let index = (id).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        this.reader = reader;
        this.title = title;
        this.id = `tale-${index}`;

        this.stream = `https://kazky.suspilne.media/tales/songs/${index}.mp3`;
        this.image = `https://kazky.suspilne.media/tales/img/${index}-min.jpg`;
    }

    add() {
        var talesDiv = document.getElementById("tales");
        var taleElement = document.createElement("div");

        taleElement.id = this.id;
        talesDiv.appendChild(taleElement);

        taleElement.innerHTML = `
            <div class="tale" style="position: relative;">
                <img class="tale-image">
                <img class="play-btn" src="/img/play.png">
                <div class="tale-title text"></div>
                <div class="tale-reader text"></div>
            </div>`;

        document.querySelector(`div#${this.id} img.tale-image`).src = this.image;
        document.querySelector(`div#${this.id} div.tale-title`).textContent = this.title;
        document.querySelector(`div#${this.id} div.tale-reader`).textContent = this.reader;
    }
}

function play(id, stream) {
    let audio = document.getElementById("audio");

    if (nowPlaying === id) {
        nowPlaying = 0;
        audio.stop();
    } else {
        let next = getNext(id);
        nowPlaying = id;
        audio.src = stream;
        audio.play();
        audio.addEventListener("ended", function () { play(next.id, next.stream); });
    }

    setPlayBtn();
}

function getNext(id) {
    for (let i = 0; i < tales.length - 1; i++) {
        if (tales[i].id === id) return tales[i + 1];
    }

    return tales[0];
}

function setPlayBtn() {
    tales.forEach(tale => {
        document.querySelector(`div#${tale.id} img.play-btn`).src = (tale.id == nowPlaying) ? "/img/pause.png" : "/img/play.png";
    });
}


class Readers {
    constructor(){
    this.andrii_hlyvniuk      = '';
    this.marko_galanevych     = '';
    this.alina_pash           = '';
    this.sasha_koltsova       = '';
    this.evgen_maluha         = '';
    this.sergii_zhadan        = '';
    this.hrystyna_soloviy     = '';
    this.oleksiy_dorychevsky  = '';
    this.julia_jurina         = '';
    this.marta_liubchyk       = '';
    this.alyona_alyona        = '';
    this.mariana_golovko      = '';
    this.dmytro_schebetiuk    = '';
    this.jaroslav_lodygin     = '';
    this.michel_schur         = '';
    this.ruslana_khazipova    = '';
    this.vova_zi_lvova        = '';
    this.evgen_klopotenko     = '';
    this.marusia_ionova       = '';
    this.solomia_melnyk       = '';
    this.anna_nikitina        = '';
    this.roman_yasynovsky     = '';
    this.vlad_fisun           = '';
    this.timur_miroshnychenko = '';
    this.pavlo_varenitsa      = '';
    this.sergii_kolos         = '';
    this.stas_koroliov        = '';
    this.katia_rogova         = '';
    this.ivan_marunych        = '';
    this.nata_smirnova        = '';
    this.oleg_moskalenko      = '';
    this.rosava               = '';
    this.jamala               = '';
    this.sergii_tanchynets    = '';
    this.inna_grebeniuk       = '';
    this.olga_shurova         = '';
    this.anastasiia_gudyma    = '';
    this.dmytro_horkin        = '';
    this.kateryna_ofliyan     = '';
}
}

nowPlaying = 0;
tales = [
    new Tale(1, 'FOR_BABIES', '02:04', 7200, 'Заєць хвалько', Readers.andrii_hlyvniuk),
    new Tale(2, 'FOR_BOTH', '02:28', 7200, 'Лис, цап і мішок моркви', Readers.andrii_hlyvniuk),
    new Tale(3, 'FOR_KIDS', '02:10', 8200, 'Чому кенгуру стрибає', Readers.andrii_hlyvniuk),
    new Tale(4, 'FOR_BABIES', '01:11', 7500, 'Бджола рятує гусці життя', Readers.marko_galanevych),
    new Tale(5, 'FOR_BOTH', '01:50', 7000, 'Жаба боязкіша за зайця', Readers.marko_galanevych),
    new Tale(6, 'FOR_BABIES', '02:31', 6500, 'Лисиця і Рак', Readers.alina_pash),
    new Tale(7, 'FOR_KIDS', '02:34', 7000, 'Сонячна квітка', Readers.sasha_koltsova),
    new Tale(8, 'FOR_BABIES', '00:48', 7000, 'Чому кіт умивається тільки по обіді', Readers.sasha_koltsova),
    new Tale(9, 'FOR_BABIES', '01:44', 7000, 'Як лис вовка маслом частував', Readers.sasha_koltsova),
    new Tale(10, 'FOR_BABIES', '02:15', 7000, 'Мишача рада', Readers.evgen_maluha),
    new Tale(11, 'FOR_BOTH', '02:15', 8200, 'Кошеня й мишеня', Readers.evgen_maluha),
    new Tale(12, 'FOR_BABIES', '03:01', 6500, 'Як курочка півника врятувала', Readers.evgen_maluha),
    new Tale(13, 'FOR_KIDS', '03:20', 6800, 'Черепаха і олень', Readers.sergii_zhadan),
    new Tale(14, 'FOR_KIDS', '03:53', 6700, 'Іссумбосі', Readers.sergii_zhadan),
    new Tale(15, 'FOR_KIDS', '05:01', 6900, 'Гарна дружина', Readers.sergii_zhadan),
    new Tale(16, 'FOR_KIDS', '09:11', 7700, 'Том Тіт Тот', Readers.hrystyna_soloviy),
    new Tale(17, 'FOR_KIDS', '12:33', 6500, 'Чарівне горнятко', Readers.hrystyna_soloviy),
    new Tale(18, 'FOR_KIDS', '07:36', 7200, 'Просинка', Readers.hrystyna_soloviy),
    new Tale(19, 'FOR_BABIES', '04:03', 6700, 'Колобок', Readers.oleksiy_dorychevsky),
    new Tale(20, 'FOR_BABIES', '02:59', 6500, 'Лисичка та Журавель', Readers.oleksiy_dorychevsky),
    new Tale(21, 'FOR_BABIES', '05:05', 6700, 'Рукавичка', Readers.oleksiy_dorychevsky),
    new Tale(22, 'FOR_BABIES', '04:42', 6200, 'Дві білочки', Readers.alina_pash),
    new Tale(23, 'FOR_BABIES', '09:56', 7500, 'Коза-дереза', Readers.julia_jurina),
    new Tale(24, 'FOR_BABIES', '01:03', 6300, 'Курочка ряба', Readers.julia_jurina),
    new Tale(25, 'FOR_BABIES', '04:27', 6500, 'Ріпка', Readers.marta_liubchyk),
    new Tale(26, 'FOR_BABIES', '04:51', 6300, 'Пан Коцький', Readers.alyona_alyona),
    new Tale(27, 'FOR_BABIES', '02:51', 6200, 'Лисичка суддя', Readers.alina_pash),
    new Tale(28, 'FOR_KIDS', '03:03', 6500, 'Як пан по німецькому балакав', Readers.mariana_golovko),
    new Tale(29, 'FOR_KIDS', '04:14', 6200, 'Заморське яйце', Readers.dmytro_schebetiuk),
    new Tale(30, 'FOR_BABIES', '02:51', 6000, 'Казка про билинку та горобця', Readers.dmytro_schebetiuk),
    new Tale(31, 'FOR_KIDS', '06:30', 6000, 'Золота пшениця', Readers.jaroslav_lodygin),
    new Tale(32, 'FOR_BOTH', '06:31', 6500, 'Кривенька качечка', Readers.julia_jurina),
    new Tale(33, 'FOR_BABIES', '02:01', 6500, 'Хитрий півень', Readers.mariana_golovko),
    new Tale(34, 'FOR_KIDS', '01:58', 6500, 'Як соловейко чоловіка розуму навчив', Readers.michel_schur),
    new Tale(35, 'FOR_KIDS', '05:27', 6550, 'Голе телятко', Readers.jaroslav_lodygin),
    new Tale(36, 'FOR_KIDS', '04:36', 6500, 'Розум та щастя', Readers.jaroslav_lodygin),
    new Tale(37, 'FOR_BABIES', '03:19', 6300, 'Колосок', Readers.alyona_alyona),
    new Tale(38, 'FOR_KIDS', '04:58', 7000, 'Як дурень випросив вогню', Readers.mariana_golovko),
    new Tale(39, 'FOR_BABIES', '02:39', 7000, 'Котик та півник', Readers.alyona_alyona),
    new Tale(40, 'FOR_KIDS', '02:39', 6600, 'Чому зайці сірі', Readers.dmytro_schebetiuk),
    new Tale(41, 'FOR_KIDS', '05:09', 6500, 'Круглячок', Readers.marta_liubchyk),
    new Tale(42, 'FOR_KIDS', '05:11', 6500, 'Чабанець', Readers.marta_liubchyk),
    new Tale(43, 'FOR_KIDS', '04:13', 6200, 'Казка про липку і зажерливу бабу', Readers.michel_schur),
    new Tale(44, 'FOR_BABIES', '02:51', 6150, 'Чому гуси миються у воді', Readers.ruslana_khazipova),
    new Tale(45, 'FOR_KIDS', '07:04', 5700, 'Іван Побиван', Readers.ruslana_khazipova),
    new Tale(46, 'FOR_BABIES', '02:31', 6700, 'Коржик', Readers.ruslana_khazipova),
    new Tale(47, 'FOR_BABIES', '01:32', 7000, 'Лисичка і глечик', Readers.vova_zi_lvova),
    new Tale(48, 'FOR_BOTH', '01:43', 6850, 'Старий дуб і діброва', Readers.vova_zi_lvova),
    new Tale(49, 'FOR_KIDS', '04:55', 7200, 'Золотий мак', Readers.evgen_klopotenko),
    new Tale(50, 'FOR_KIDS', '04:25', 6300, 'Котик', Readers.marusia_ionova),
    new Tale(51, 'FOR_KIDS', '03:42', 7300, 'Про найцінніше', Readers.evgen_klopotenko),
    new Tale(52, 'FOR_KIDS', '06:20', 6850, 'Хто не робить той не їсть', Readers.evgen_klopotenko),
    new Tale(53, 'FOR_KIDS', '08:52', 5700, 'Дарунки з трьох зернин', Readers.marusia_ionova),
    new Tale(54, 'FOR_KIDS', '06:48', 6800, 'Три персні', Readers.marusia_ionova),
    new Tale(55, 'FOR_KIDS', '02:50', 6000, 'Про бідного багача', Readers.solomia_melnyk),
    new Tale(56, 'FOR_KIDS', '04:47', 6600, 'Казка про чемного кушніра', Readers.solomia_melnyk),
    new Tale(57, 'FOR_BABIES', '02:36', 6700, 'Війна грибів з жуками', Readers.solomia_melnyk),
    new Tale(58, 'FOR_BOTH', '01:53', 6600, 'Вовк та вовчиця', Readers.solomia_melnyk),
    new Tale(59, 'FOR_BOTH', '02:28', 6500, 'Орел і кріт', Readers.anna_nikitina),
    new Tale(60, 'FOR_BABIES', '02:16', 6250, 'Сніжниця', Readers.anna_nikitina),
    new Tale(61, 'FOR_KIDS', '03:27', 6500, 'Цап та баран', Readers.anna_nikitina),
    new Tale(62, 'FOR_BOTH', '04:05', 6600, 'Казка про чоловіка і Данила Бурмила', Readers.vova_zi_lvova),
    new Tale(63, 'FOR_BABIES', '01:52', 6350, 'Лисиця та їжак', Readers.roman_yasynovsky),
    new Tale(64, 'FOR_KIDS', '07:20', 7200, 'Льодяне царство', Readers.roman_yasynovsky),
    new Tale(65, 'FOR_BABIES', '02:10', 6500, 'Нерозумне кошеня', Readers.roman_yasynovsky),
    new Tale(66, 'FOR_KIDS', '03:01', 6500, 'Про щасливого бідняка і нещасного пана', Readers.vlad_fisun),
    new Tale(67, 'FOR_BABIES', '01:24', 6300, 'Як журавель помирив мишу з жабою', Readers.vlad_fisun),
    new Tale(68, 'FOR_KIDS', '02:34', 6500, 'Хліб і золото', Readers.vlad_fisun),
    new Tale(69, 'FOR_KIDS', '03:27', 6700, 'Три бажання', Readers.timur_miroshnychenko),
    new Tale(70, 'FOR_KIDS', '06:10', 6300, 'Про неробу Юрка', Readers.timur_miroshnychenko),
    new Tale(71, 'FOR_BOTH', '04:14', 6300, 'Калиточка', Readers.timur_miroshnychenko),
    new Tale(72, 'FOR_BABIES', '01:43', 6250, 'Олень, черепаха і птах', Readers.pavlo_varenitsa),
    new Tale(73, 'FOR_BOTH', '01:54', 6700, 'Вовк під вікном', Readers.pavlo_varenitsa),
    new Tale(74, 'FOR_BABIES', '01:30', 6550, 'Бджоли та ведмідь', Readers.pavlo_varenitsa),
    new Tale(75, 'FOR_BABIES', '02:10', 6500, 'Журавель та чапля', Readers.sergii_kolos),
    new Tale(76, 'FOR_BABIES', '02:00', 6350, 'Хвалькувата муха', Readers.sergii_kolos),
    new Tale(77, 'FOR_KIDS', '08:37', 5500, 'Вівчар Василько і золоті гори', Readers.sergii_kolos),
    new Tale(78, 'FOR_KIDS', '03:54', 6000, 'Чому тигр такий злий на кота', Readers.stas_koroliov),
    new Tale(79, 'FOR_BOTH', '04:55', 7000, 'Як Джек ходив щастя шукати', Readers.stas_koroliov),
    new Tale(80, 'FOR_BABIES', '03:31', 6000, 'Як жаби подорожували', Readers.stas_koroliov),
    new Tale(81, 'FOR_BOTH', '06:58', 5700, 'Полохлива душа', Readers.katia_rogova),
    new Tale(82, 'FOR_KIDS', '05:39', 6000, 'Чому в ластівки хвостик, мов ріжки', Readers.katia_rogova),
    new Tale(83, 'FOR_KIDS', '09:23', 6000, 'Вразливий шустик', Readers.katia_rogova),
    new Tale(84, 'FOR_KIDS', '09:02', 5500, 'Пензлик маляна', Readers.ivan_marunych),
    new Tale(85, 'FOR_KIDS', '04:45', 6800, 'Кінь, що літати вмів', Readers.ivan_marunych),
    new Tale(86, 'FOR_KIDS', '04:48', 6500, 'Лісовики', Readers.ivan_marunych),
    new Tale(87, 'FOR_BABIES', '04:53', 6500, 'Звідки взялися місяць та зорі на небі', Readers.nata_smirnova),
    new Tale(88, 'FOR_KIDS', '09:14', 5500, 'Кмітлива дівчина', Readers.nata_smirnova),
    new Tale(89, 'FOR_KIDS', '11:32', 5600, 'Три брати і жаба', Readers.nata_smirnova),
    new Tale(90, 'FOR_KIDS', '12:18', 5750, 'Кентен і муха', Readers.oleg_moskalenko),
    new Tale(91, 'FOR_KIDS', '05:54', 5400, 'І на силу знайдеться сила', Readers.oleg_moskalenko),
    new Tale(92, 'FOR_KIDS', '06:44', 5800, 'Який гук такий відгук', Readers.oleg_moskalenko),
    new Tale(93, 'FOR_KIDS', '07:39', 7200, 'Замок на скелі', Readers.rosava),
    new Tale(94, 'FOR_BABIES', '02:45', 6800, 'Поросяче життя', Readers.rosava),
    new Tale(95, 'FOR_KIDS', '08:00', 7000, 'Умілі руки', Readers.rosava),
    new Tale(96, 'FOR_BABIES', '02:37', 6600, 'Материнська любов', Readers.jamala),
    new Tale(97, 'FOR_KIDS', '01:59', 6500, 'Задавака', Readers.jamala),
    new Tale(98, 'FOR_KIDS', '06:30', 6300, 'Золота колиска', Readers.jamala),
    new Tale(99, 'FOR_KIDS', '01:56', 6700, 'Віслюк-мудрагель', Readers.sergii_tanchynets),
    new Tale(100, 'FOR_KIDS', '02:09', 6500, 'Виноградар і змія', Readers.sergii_tanchynets),
    new Tale(101, 'FOR_KIDS', '04:42', 6700, 'Золота прядочка', Readers.sergii_tanchynets),
    new Tale(102, 'FOR_KIDS', '07:54', 7300, 'Синя свита навиворіт пошита', Readers.inna_grebeniuk),
    new Tale(103, 'FOR_KIDS', '04:27', 6500, 'Зароблений карбованець', Readers.inna_grebeniuk),
    new Tale(104, 'FOR_KIDS', '05:39', 6000, 'Як лікувати лінь', Readers.inna_grebeniuk),
    new Tale(105, 'FOR_KIDS', '04:57', 6800, 'Як пес вовка в чоботи взув', Readers.olga_shurova),
    new Tale(106, 'FOR_BOTH', '01:46', 6200, 'Кінь і віл', Readers.olga_shurova),
    new Tale(107, 'FOR_KIDS', '03:50', 6300, 'Сто золотих монет', Readers.olga_shurova),
    new Tale(108, 'FOR_KIDS', '01:43', 6500, 'Ром і водяник', Readers.anastasiia_gudyma),
    new Tale(109, 'FOR_KIDS', '05:10', 6500, 'Наймит, кухар і пан', Readers.anastasiia_gudyma),
    new Tale(110, 'FOR_BOTH', '02:37', 6850, 'Сім лозин', Readers.anastasiia_gudyma),
    new Tale(111, 'FOR_KIDS', '10:00', 7500, 'Подарунки чаклуна', Readers.dmytro_horkin),
    new Tale(112, 'FOR_KIDS', '10:26', 5500, 'Пані Метелиця', Readers.dmytro_horkin),
    new Tale(113, 'FOR_KIDS', '11:33', 5500, 'Круглий камінь', Readers.dmytro_horkin),
    new Tale(114, 'FOR_KIDS', '06:01', 6500, 'Балакір і хазяїн', Readers.dmytro_horkin),
    new Tale(115, 'FOR_BOTH', '04:55', 7800, 'Вовк і лисиця', Readers.kateryna_ofliyan),
    new Tale(116, 'FOR_KIDS', '05:52', 6000, 'Чарівне джерело', Readers.kateryna_ofliyan),
    new Tale(117, 'FOR_BOTH', '03:16', 7400, 'Хто найстарший', Readers.kateryna_ofliyan),
]
