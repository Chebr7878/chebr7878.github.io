export type Section = {
  id: string;
  number: number;
  title: string;
  keywords: string[];
  summary: string;
  content: string;
};

export const sections: Section[] = [
  {
    id: 'vvedenie',
    number: 1,
    title: 'Введение',
    keywords: ['введение','о стандарте','назначение','цель','общие сведения'],
    summary: 'Краткий обзор области применения и структуры стандарта, актуальность и цели использования железобетонных безнапорных труб.',
    content: `МЕЖГОСУДАРСТВЕННЫЙ СТАНДАРТ ГОСТ 6482-2011<br/><br/>
ТРУБЫ ЖЕЛЕЗОБЕТОННЫЕ БЕЗНАПОРНЫЕ<br/><br/>
Введен в действие в качестве национального стандарта Российской Федерации<br/>
с 1 января 2013 г.<br/><br/>
Взамен ГОСТ 6482-88`,
  },
  {
    id: 'oblast-primeneniya',
    number: 2,
    title: 'Область применения',
    keywords: ['область применения','назначение','канализация','дренаж','ливневая','водоотвод'],
    summary: 'Где применяются трубы: безнапорные канализационные, дренажные и ливневые системы, водоотвод и мелиорация.',
    content: `Настоящий стандарт распространяется на железобетонные безнапорные трубы, предназначенные для прокладки подземных трубопроводов, транспортирующих самотёком бытовые и производственные жидкости, атмосферные, сточные и подземные воды, в том числе при наличии агрессивного воздействия среды.<br/><br/>

Требования настоящего стандарта не распространяются на водопропускные трубы, укладываемые под насыпями автомобильных и железных дорог, а также трубы для микротоннелирования.<br/><br/>

<div style="text-align: center; margin: 20px 0;">
  <button id="road-clarification-btn" class="explanation-btn-gray" onclick="toggleRoadClarification()">
    <span style="font-weight: bold; color: white;">УТОЧНЕНИЕ</span>
  </button>
</div>

<div id="road-clarification" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;"><strong>Применение железобетонных труб по ГОСТ 6482-2011 в дорожном строительстве</strong></h4>
    
    <br/>
    
    <p>В сфере дорожного строительства часто возникает вопрос: можно ли использовать железобетонные безнапорные трубы, произведенные по ГОСТ 6482-2011, в качестве водопропускных сооружений под насыпями автомобильных дорог? Несмотря на прямую оговорку в стандарте, ответ является положительным для дорог определенных категорий. Давайте разберемся, в каких случаях это допустимо и чем регламентируется.</p>
    
    <br/>
    
    <h5 style="color: #374151;">Что означает оговорка в ГОСТ 6482-2011?</h5>
    
    <br/>
    
    <p>В самом ГОСТ 6482-2011 указано: «Требования настоящего стандарта не распространяются на водопропускные трубы, укладываемые под насыпями автомобильных и железных дорог».</p>
    
    <br/>
    
    <p>Важно понимать: это утверждение не запрещает применение таких труб в дорожном строительстве. Оно означает, что данный ГОСТ регулирует в первую очередь производство и параметры самих труб, но не является исчерпывающим нормативным документом для их проектирования и расчета в составе дорожной насыпи. Для этого существуют другие, более специализированные своды правил (СП).</p>
    
    <br/>
    
    <p>Железобетонные безнапорные трубы по ГОСТ 6482-2011 успешно применяются в качестве водопропускных сооружений на автомобильных дорогах IV и V категорий.</p>
    
    <br/>
    
    <p>Это применение обосновано и регламентировано следующими документами:</p>
    <ul>
      <li>ГОСТ 6482-2011 — определяет требования к самим трубам.</li>
      <li>СП 35.13330.2011 "Мосты и трубы" — устанавливает расчетные нагрузки для искусственных сооружений.</li>
      <li>СП 34.13330.2010 "Автомобильные дороги" — определяет категории дорог и нагрузки на них.</li>
      <li>ТПР 503.7.015.90 Трубы водопропускные круглые из длинномерных звеньев отверстием 1,00, 1,20, 1,40, 1,60 метров под автомобильные дороги — специализированные технические правила проектирования, прямо разрешающие использование круглых водопропускных труб из длинномерных звеньев под автомобильные дороги.</li>
    </ul>
    
    <br/>
    
    <h5 style="color: #374151;"><strong>Ключевой параметр: расчетная нагрузка НК-100</strong></h5>
    
    <br/>
    
    <p>Возможность использования труб по ГОСТ 6482-2011 обусловлена тем, что они проектируются и изготавливаются с учетом эксплуатации под временной нагрузкой на поверхности земли класса НК-100.</p>
    
    <br/>
    
    <p><strong>Что такое НК-100?</strong></p>
    
    <br/>
    
    <p>НК-100 — это нормативная нагрузка на колесо, используемая при расчёте малых искусственных сооружений (в том числе водопропускных труб) на автомобильных дорогах.</p>
    <p>НК — нормативная нагрузка от колесной машины (одиночного транспортного средства).</p>
    <p>100 — нагрузка в 100 килоньютон (кН), что соответствует примерно 10 тоннам силы.</p>
    <p>Согласно СП 35.13330.2011 (п. 6.4) и СП 34.13330.2010, нагрузка НК-100 является расчетной для автомобильных дорог IV и V категорий.</p>
    
    <br/>
    
    <h5 style="color: #374151;">Категории дорог и примеры их использования</h5>
    
    <br/>
    
    <p>Категории дорог определяются СП 34.13330.2010 (актуализированная редакция СНиП 2.05.02-85) на основе их значения, интенсивности движения и состава транспорта.</p>
    
    <br/>
    
    <p><strong>Дороги IV категории:</strong></p>
    
    <br/>
    
    <p>Назначение: подъездные пути к населенным пунктам, промышленным и сельскохозяйственным объектам, курортам, зонам отдыха.</p>
    <p>Интенсивность движения: от 200 до 2000 автомобилей в сутки.</p>
    <p>Примеры: подъезд к деревне от федеральной трассы, дорога к ферме или складу, улицы в небольших городах с низкой проходимостью, дороги внутри промышленных зон.</p>
    
    <br/>
    
    <p><strong>Дороги V категории:</strong></p>
    
    <br/>
    
    <p>Назначение: внутрихозяйственные, полевые, лесные, временные дороги.</p>
    <p>Интенсивность движения: менее 200 автомобилей в сутки.</p>
    <p>Примеры: полевые и лесовозные дороги, технологические проезды на стройплощадках, внутрипоселковые улицы в деревнях.</p>
    
    <br/>
    
    <p>Таким образом, утверждение о том, что требования ГОСТ 6482-2011 не распространяются на трубы под дорожными насыпями, лишь указывает на необходимость руководствоваться при проектировании другими нормативными документами.</p>
    
    <br/>
    
    <p>Железобетонные безнапорные трубы по ГОСТ 6482-2011 разрешено и технически обоснованно применять на дорогах IV и V категорий, потому что:</p>
    
    <br/>
    
    <ol>
      <li>Они рассчитаны на нагрузку НК-100, которая является стандартной для этих категорий дорог.</li>
      <li>Специализированные правила ТПР 503.7.015.90 прямо разрешают их использование.</li>
      <li>Их параметры полностью соответствуют требованиям СП 35.13330.2011 "Мосты и трубы" и СП 34.13330.2010 "Автомобильные дороги" для данных условий эксплуатации.</li>
    </ol>
    
    <br/>
    
    <p>Следовательно, для проектов дорог низких категорий трубы по ГОСТ 6482-2011 являются экономичным, надежным и полностью соответствующим нормативам решением.</p>
    
    <div style="text-align: center; margin: 30px 0; display: flex; justify-content: center; align-items: center;">
      <img src="/Трубопереезд из раструбных труб.png" alt="Трубопереезд из раструбных труб" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-height: 400px; display: block; margin: 0 auto;" />
    </div>
    
    <div style="text-align: center; margin: 20px 0;">
      <button onclick="toggleRoadClarification()" style="background: #6b7280; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background-color 0.2s;">
        Закрыть примечание
      </button>
    </div>
  </div>
</div>

<strong>Термины и определения</strong><br/><br/>

<strong>вибропрессование</strong> — прогрессивный высокопроизводительный способ изготовления труб из жёстких бетонных смесей с использованием немедленной распалубки, характеризующийся пониженной энергоёмкостью и металлоёмкостью и обеспечивающий получение изделий с высокими физико-механическими характеристиками.<br/><br/>

<strong>диаметр условного прохода трубы</strong> — геометрический параметр поперечного сечения трубы, равный диаметру условного круглого прохода (без учёта допускаемых отклонений), по которому проводят гидравлический расчёт трубопровода.<br/><br/>

<strong>лоток</strong> — нижняя часть трубы в рабочем положении, расположенная симметрично относительно вертикального диаметра.<br/><br/>

<strong>радиальное прессование</strong> — высокопроизводительный способ изготовления труб из жёстких бетонных смесей с использованием немедленной распалубки, характеризующийся пониженной энергоёмкостью и металлоёмкостью.<br/><br/>

<strong>полезная длина трубы</strong> — длина трубы, фактически учитываемая при проектировании и монтаже трубопроводов.<br/><br/>

<strong>стыковые поверхности</strong> — поверхности концевых участков труб, взаимно сопрягаемые при монтаже трубопроводов.<br/><br/>

<strong>трубы раструбные</strong> — трубы, имеющие на одном конце раструб, а на другом конце втулочную часть, входящую в раструб при монтаже трубопровода.<br/><br/>

<strong>трубы безнапорные</strong> — трубы, предназначенные для сооружения трубопроводов, по которым транспортируют жидкости самотёком, неполным сечением (до 0,95 внутреннего диаметра трубы).<br/><br/>

<strong>трубы с подошвой</strong> — трубы, имеющие в рабочем положении снизу плоскую или другого очертания опорную поверхность. (Трубы с плоским основанием.)<br/><br/>

<strong>трубы фальцевые</strong> — трубы, имеющие по торцам взаимно сопрягаемые поверхности в пределах толщины стенки трубы.<br/><br/>

<strong>шелыга</strong> — верхняя часть трубы в рабочем положении, расположенная симметрично относительно вертикального диаметра.<br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="simple-explanation-btn" class="explanation-btn-gray" onclick="toggleExplanation()">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
</div>

<div id="simple-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Область применения:</h4>
    <p>Стандарт ГОСТ 6482-2011 регулирует требования к железобетонным безнапорным трубам, которые используют для подземных самотёчных трубопроводов (бытовые, промышленные стоки, дождевая и грунтовая вода, в том числе в агрессивных средах).</p>
    <p>Он не распространяется на водопропускные трубы под дорогами и трубы для микротоннелирования.</p>
    
    <h4 style="color: #374151;">Основные термины:</h4>
    <ul style="list-style-type: none; padding-left: 0;">
      <li><strong>Вибропрессование / радиальное прессование</strong> — современные технологии производства прочных труб из жёстких бетонных смесей.</li>
      <li><strong>Диаметр условного прохода</strong> — расчётный внутренний диаметр трубы.</li>
      <li><strong>Полезная длина</strong> — рабочая длина, учитываемая при монтаже.</li>
      <li><strong>Лоток и шелыга</strong> — нижняя и верхняя части трубы.</li>
      <li><strong>Стыковые поверхности</strong> — торцевые элементы для соединения труб.</li>
      <li><strong>Раструбные трубы</strong> — с расширением на конце для стыковки.</li>
      <li><strong>Фальцевые трубы</strong> — со специальной замковой формой торца.</li>
      <li><strong>Трубы с подошвой</strong> — с плоским основанием для устойчивости.</li>
      <li><strong>Безнапорные трубы</strong> — для самотёчного движения жидкости.</li>
    </ul>
    
    <div style="text-align: center; margin: 20px 0;">
      <button onclick="toggleExplanation()" style="background: #6b7280; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background-color 0.2s;">
        Закрыть примечание
      </button>
    </div>
  </div>
</div>`,
  },
  {
    id: 'klassifikaciya',
    number: 3,
    title: 'Классификация',
    keywords: ['классификация','типы','виды','серии','условные обозначения'],
    summary: 'Схема деления труб по типам, сериям и конструктивным признакам, включая наличие раструба и тип соединения.',
    content: `Трубы, имеющие цилиндрическую форму пропускного отверстия, в зависимости от наружной геометрической формы и вида соединения подразделяют на следующие типы:<br/><br/>

<strong>Т</strong> — железобетонные цилиндрические раструбные со стыковыми соединениями, уплотняемыми герметиками или другими материалами;<br/><br/>

<strong>ТП</strong> — железобетонные цилиндрические раструбные со стыковыми соединениями, уплотняемыми герметиками или другими материалами, с подошвой (с плоским основанием);<br/><br/>

<strong>ТБ и ТС</strong> — цилиндрические раструбные с упорным буртиком или ступенчатой поверхностью втулочного конца трубы и стыковыми соединениями, уплотняемыми резиновыми кольцами или другими эластомерными материалами;<br/><br/>

<strong>ТБП и ТСП</strong> — цилиндрические раструбные с упорным буртиком или ступенчатой поверхностью втулочного конца трубы и стыковыми соединениями, уплотняемыми резиновыми кольцами или другими эластомерными материалами, с подошвой (с плоским основанием);<br/><br/>

<strong>ТФ</strong> — цилиндрические фальцевые со стыковыми соединениями, уплотняемыми герметиками или другими материалами;<br/><br/>

<strong>ТФП</strong> — цилиндрические фальцевые со стыковыми соединениями, уплотняемыми герметиками или другими материалами, с подошвой (с плоским основанием).<br/><br/>

Допускаются и другие типы труб, например, с овалоидальным или эллиптическим отверстием, нормируемые техническими условиями или стандартами организаций и изготавливаемые по соответствующим чертежам, утверждённым в установленном порядке.<br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="classification-explanation-btn" class="explanation-btn-gray" onclick="toggleClassificationExplanation()">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
</div>

<div id="classification-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Классификация труб:</h4>
    <p>ГОСТ выделяет несколько видов железобетонных труб. Одни соединяются с помощью герметика, другие — с резиновыми кольцами. Некоторые трубы делают с плоским основанием, чтобы они лучше стояли и не перекатывались. Есть также фальцевые трубы с замковым соединением. А в особых случаях допускаются трубы не только круглые, но и овальные или эллиптические — по отдельным чертежам.</p>
    
    <div style="text-align: center; margin: 20px 0;">
      <button onclick="toggleClassificationExplanation()" style="background: #6b7280; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background-color 0.2s;">
        Закрыть примечание
      </button>
    </div>
  </div>
</div>

<div id="pipe-type-buttons-container"></div>`,
  },
  {
    id: 'gruppy-nesushchey',
    number: 4,
    title: 'Группы по несущей способности',
    keywords: ['несущая способность','прочность','класс прочности','нагрузка','группа'],
    summary: 'Определение групп по допускаемым нагрузкам, условиям заглубления и характеристикам основания.',
    content: `Трубы по несущей способности подразделяют на пять групп:<br/><br/>

<strong>1 группа</strong> — применяются при расчётной высоте засыпки грунтом до верха основной цилиндрической части трубы не более 2 м;<br/><br/>

<strong>2 группа</strong> — применяются при расчётной высоте засыпки грунтом до верха основной цилиндрической части трубы не более 4 м;<br/><br/>

<strong>3 группа</strong> — применяются при расчётной высоте засыпки грунтом до верха основной цилиндрической части трубы не более 6 м;<br/><br/>

<strong>4 группа</strong> — применяются при расчётной высоте засыпки грунтом до верха основной цилиндрической части трубы не более 8 м;<br/><br/>

<strong>5 группа</strong> — применяются при расчётной высоте засыпки грунтом до верха основной цилиндрической части трубы не более 10 м.<br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="strength-explanation-btn" class="explanation-btn-gray" onclick="toggleStrengthExplanation()">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
</div>

<div id="strength-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Группы по несущей способности:</h4>
    <p>Железобетонные трубы бывают разных «классов прочности». Одни можно укладывать неглубоко — под 2 метра грунта, другие выдерживают до 10 метров засыпки сверху. Поэтому при проектировании важно правильно выбрать группу: чем глубже закладывается труба, тем более прочной она должна быть.</p>
    
    <div style="text-align: center; margin: 20px 0;">
      <button onclick="toggleStrengthExplanation()" style="background: #6b7280; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background-color 0.2s;">
        Закрыть примечание
      </button>
    </div>
  </div>
</div>`,
  },
  {
    id: 'razmery-geometriya',
    number: 5,
    title: 'Размеры и геометрия',
    keywords: ['размеры','диаметр','длина','толщина стенки','геометрия','допуски'],
    summary: 'Номинальные диаметры, длины, допуски по геометрии и требования к овальности и прямолинейности.',
    content: `<strong>Диаметр условного прохода труб должен быть:</strong><br/>
300; 400; 500; 600; 800; 1000; 1200; 1400; 1600; 1800; 2000; 2200; 2400 и 3000 мм.<br/><br/>

При технико-экономическом обосновании трубы могут иметь другой диаметр условного прохода, например:<br/>
1250; 1500; 2500; 2600; 2700 и 2800 мм.<br/><br/>

<strong>Полезная длина труб должна быть кратной 500 мм.</strong><br/><br/>

длина труб должна быть не менее 1,5 м — для труб диаметром 300 мм;<br/><br/>

длина труб должна быть не менее 2,0 м — для труб диаметром 400–500 мм;<br/><br/>

длина труб должна быть не менее 2,5 м — для труб диаметром 600–2400 мм;<br/><br/>

длина труб диаметром более 2400 мм определяется по согласованию с предприятием-изготовителем и потребителем.<br/><br/>

<strong>Приложение Б — Рекомендуемые основные размеры труб</strong><br/><br/>

<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.8em; background: white; border: 2px solid #374151;">
    <thead>
      <tr style="background: #374151; color: white;">
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Тип труб</th>
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Внутренний диаметр, мм</th>
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Полезная длина, мм</th>
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Минимальная толщина стенки, мм</th>
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Глубина раструба, мм</th>
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Глубина фальца, мм</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center; font-weight: bold;">Т, ТБ, ТС, ТФ</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">300</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2000</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">45</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">80</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">25</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 4px; text-align: center; font-weight: bold;">Т, ТБ, ТС, ТФ</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">400</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2500 (5000)</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">50</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">100</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">30</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center; font-weight: bold;">Т, ТБ, ТС, ТФ</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">500</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2500 (5000)</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">55</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">100</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">30</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 4px; text-align: center; font-weight: bold;">Т, ТБ, ТС, ТФ</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">600</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2500 (5000)</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">60</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">100</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">35</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center; font-weight: bold;">Т, ТП, ТБ, ТС, ТБП, ТСП, ТФП</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">800</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2500-3000 (5000)</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">80</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">110</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">55</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 4px; text-align: center; font-weight: bold;">Т, ТП, ТБ, ТС, ТБП, ТСП, ТФП</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">1000</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2500-3000 (5000)</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">100</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">110</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">80</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center; font-weight: bold;">Т, ТП, ТБ, ТС, ТБП, ТСП, ТФП</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">1200</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2500-3000 (5000)</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">110</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">110</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">100</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 4px; text-align: center; font-weight: bold;">Т, ТП, ТБ, ТС, ТБП, ТСП, ТФП</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">1400</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2500-3000 (5000)</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">120</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">110</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">100</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center; font-weight: bold;">Т, ТП, ТБ, ТС, ТБП, ТСП, ТФП</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">1600</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2500-3000 (5000)</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">120</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">110</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">100</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 4px; text-align: center; font-weight: bold;">ТП, ТБП, ТСП, ТФП</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">1800</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2500</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">125</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">120</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">100</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center; font-weight: bold;">ТП, ТБП, ТСП, ТФП</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2000</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2500</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">130</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">130</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">110</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 4px; text-align: center; font-weight: bold;">ТП, ТБП, ТСП, ТФП</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2200</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2500</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">140</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">135</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">120</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center; font-weight: bold;">ТП, ТБП, ТСП, ТФП</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2400</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2500</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">150</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">140</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">140</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 4px; text-align: center; font-weight: bold;">ТП, ТБП, ТСП, ТФП</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">3000</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">2000</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">170</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">150</td>
        <td style="border: 1px solid #374151; padding: 4px; text-align: center;">140</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="background: #f8fafc; border: 2px solid #374151; border-radius: 8px; padding: 15px; margin: 15px 0;">
  <strong>Примечания:</strong><br/>
  1. В таблице приведены значения полезной длины, толщины стенки, глубин раструба и фальца для различных типов труб, которые рекомендуется принимать при разработке рабочих чертежей труб.<br/>
  2. При экономически обоснованном случае допускается изготовление и применение труб других размеров.<br/>
  3. В скобках указаны длины труб, изготавливаемых методом центрифугирования.
</div><br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="dimensions-explanation-btn" class="explanation-btn-gray" onclick="toggleDimensionsExplanation()">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
</div>

<div id="dimensions-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Размеры и геометрия:</h4>
    <p>Размеры и геометрия: ГОСТ задаёт стандартный ряд диаметров железобетонных труб — от 300 мм до 3 метров. При особых условиях допускаются нестандартные размеры, но они требуют согласования с производителем.</p>
  </div>
</div>`,
  },
  {
    id: 'markirovka',
    number: 6,
    title: 'Обозначение труб (маркировка)',
    keywords: ['обозначение','маркировка','марка','индекс','клеймо','обозначения'],
    summary: 'Структура условного обозначения трубы и правила нанесения клейма изготовителя.',
    content: `<strong>Структура условного обозначения труб</strong><br/><br/>

Марки труб обозначают в соответствии с требованиями <span data-mark-key="gost-23009" tabindex="0" role="button" aria-label="ГОСТ 23009">ГОСТ 23009</span>.<br/><br/>

<strong>Пример марки:</strong><br/><br/>

<div style="background: #f8fafc; border: 2px solid #374151; border-radius: 8px; padding: 15px; margin: 15px 0; text-align: center; font-size: 1.2em; font-weight: bold;">
<span class="mark-group" data-group="1" style="cursor: pointer; padding: 2px 4px; border-radius: 4px; transition: background-color 0.3s;" onmouseover="highlightGroup(1)" onmouseout="unhighlightGroup()">ТС 80.25</span>-<span class="mark-group" data-group="2" style="cursor: pointer; padding: 2px 4px; border-radius: 4px; transition: background-color 0.3s;" onmouseover="highlightGroup(2)" onmouseout="unhighlightGroup()">3</span>-<span class="mark-group" data-group="3" style="cursor: pointer; padding: 2px 4px; border-radius: 4px; transition: background-color 0.3s;" onmouseover="highlightGroup(3)" onmouseout="unhighlightGroup()">П</span> ГОСТ 6482-2011
</div>

<strong>Структура марки (группы, разделённые дефисом):</strong><br/><br/>

<strong>Первая группа <span class="explanation-group" data-group="1" style="cursor: pointer; padding: 2px 4px; border-radius: 4px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(1)" onmouseout="unhighlightMarkGroup()">(ТС 80.25)</span></strong> — указывают:<br/><br/>

• <span class="explanation-group" data-group="1" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(1)" onmouseout="unhighlightMarkGroup()">тип трубы</span> — <span class="explanation-group" data-group="1" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(1)" onmouseout="unhighlightMarkGroup()">ТС</span>;<br/><br/>

• <span class="explanation-group" data-group="1" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(1)" onmouseout="unhighlightMarkGroup()">диаметр условного прохода в сантиметрах</span> — <span class="explanation-group" data-group="1" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(1)" onmouseout="unhighlightMarkGroup()">80</span>;<br/><br/>

• <span class="explanation-group" data-group="1" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(1)" onmouseout="unhighlightMarkGroup()">полезную длину в дециметрах</span> — <span class="explanation-group" data-group="1" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(1)" onmouseout="unhighlightMarkGroup()">25</span>.<br/><br/>

<strong>Вторая группа <span class="explanation-group" data-group="2" style="cursor: pointer; padding: 2px 4px; border-radius: 4px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(2)" onmouseout="unhighlightMarkGroup()">(3)</span></strong> — обозначает группу по несущей способности: <span class="explanation-group" data-group="2" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(2)" onmouseout="unhighlightMarkGroup()">1</span> — первая группа, <span class="explanation-group" data-group="2" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(2)" onmouseout="unhighlightMarkGroup()">2</span> — вторая группа, <span class="explanation-group" data-group="2" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(2)" onmouseout="unhighlightMarkGroup()">3</span> — третья группа, <span class="explanation-group" data-group="2" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(2)" onmouseout="unhighlightMarkGroup()">4</span> — четвёртая группа.<br/><br/>

<strong>Третья группа <span class="explanation-group" data-group="3" style="cursor: pointer; padding: 2px 4px; border-radius: 4px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(3)" onmouseout="unhighlightMarkGroup()">(П)</span></strong> — дополнительные характеристики:<br/><br/>

<strong>Стойкость к агрессивной среде (проницаемость бетона):</strong> <span class="explanation-group" data-group="3" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(3)" onmouseout="unhighlightMarkGroup()">Н</span> — нормальная (<span class="explanation-group" data-group="3" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(3)" onmouseout="unhighlightMarkGroup()">W4</span>), <span class="explanation-group" data-group="3" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(3)" onmouseout="unhighlightMarkGroup()">П</span> — пониженная (<span class="explanation-group" data-group="3" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(3)" onmouseout="unhighlightMarkGroup()">W6</span>), <span class="explanation-group" data-group="3" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(3)" onmouseout="unhighlightMarkGroup()">О</span> — особо низкая (не ниже <span class="explanation-group" data-group="3" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(3)" onmouseout="unhighlightMarkGroup()">W10</span>).<br/><br/>

<strong>Вид агрессии:</strong> <span class="explanation-group" data-group="3" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(3)" onmouseout="unhighlightMarkGroup()">Щ</span> — щелочная, <span class="explanation-group" data-group="3" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(3)" onmouseout="unhighlightMarkGroup()">К</span> — кислотная, <span class="explanation-group" data-group="3" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(3)" onmouseout="unhighlightMarkGroup()">Х</span> — хлориды, <span class="explanation-group" data-group="3" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(3)" onmouseout="unhighlightMarkGroup()">С</span> — сульфаты.<br/><br/>

<strong>Стойкость внутреннего защитного покрытия:</strong> <span class="explanation-group" data-group="3" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(3)" onmouseout="unhighlightMarkGroup()">к</span> — кислотостойкое, <span class="explanation-group" data-group="3" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(3)" onmouseout="unhighlightMarkGroup()">щ</span> — щелочестойкое, <span class="explanation-group" data-group="3" style="cursor: pointer; padding: 1px 3px; border-radius: 3px; transition: background-color 0.3s;" onmouseover="highlightMarkGroup(3)" onmouseout="unhighlightMarkGroup()">х</span> — химически стойкое.<br/><br/>

<strong>Пример расшифровки марки:</strong><br/><br/>

<div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 15px; margin: 15px 0;">
<strong>ТС 80.25-3-П ГОСТ 6482-2011</strong> — труба железобетонная цилиндрическая раструбная со ступенчатой поверхностью втулочного конца и стыковым соединением, уплотняемым резиновым кольцом или другим эластомерным материалом, диаметром <span data-mark-key="diameter-800mm" tabindex="0" role="button" aria-label="800 мм">800 мм</span>, полезной длиной <span data-mark-key="length-2-5m" tabindex="0" role="button" aria-label="2,5 м">2,5 м</span>, <span data-mark-key="group-3rd" tabindex="0" role="button" aria-label="третьей группы">третьей группы</span> по несущей способности, изготовленная из бетона <span data-mark-key="permeability-w6" tabindex="0" role="button" aria-label="пониженной проницаемости W6">пониженной проницаемости (W6)</span>.
</div>

<strong>Нанесение маркировки</strong><br/><br/>

Маркировка осуществляется в соответствии с требованиями <span data-mark-key="gost-13015" tabindex="0" role="button" aria-label="ГОСТ 13015">ГОСТ 13015</span>.<br/><br/>

Маркировки наносят водостойкой чёрной краской (по трафарету) на наружную поверхность раструба или у одного из торцов фальцевой трубы.<br/><br/>

<strong>Установочные риски</strong><br/><br/>

При дополнительном армировании труб сетками на наружную поверхность втулочной части труб без подошвы наносят установочные риски, указывающие положение центров шелыги и лотка трубы.<br/><br/>

Длина рисок должна составлять от <span data-mark-key="risk-length-100" tabindex="0" role="button" aria-label="100 мм">100</span> до <span data-mark-key="risk-length-150" tabindex="0" role="button" aria-label="150 мм">150 мм</span>.<br/><br/>

Трубы должны иметь отметку центров шелыги и лотка, если это предусмотрено рабочими чертежами.<br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="marking-explanation-btn" class="explanation-btn-gray" onclick="toggleMarkingExplanation()">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
</div>

<div id="marking-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Обозначение труб (простыми словами):</h4>
    <p><strong>Структура марки:</strong> марка трубы состоит из трёх групп, разделённых дефисами. Например, ТС 80.25-3-П ГОСТ 6482-2011.</p>
    
    <p><strong>Первая группа (ТС 80.25):</strong> указывает тип трубы (ТС), диаметр в сантиметрах (80 = 800 мм) и длину в дециметрах (25 = 2,5 м).</p>
    
    <p><strong>Вторая группа (3):</strong> обозначает группу по несущей способности — от 1 до 4, где 4-я группа самая прочная.</p>
    
    <p><strong>Третья группа (П):</strong> указывает дополнительные характеристики — стойкость к агрессивным средам (Н/П/О), вид агрессии (Щ/К/Х/С) и тип защитного покрытия (к/щ/х).</p>
    
    <p><strong>Маркировка:</strong> наносится чёрной водостойкой краской на наружную поверхность раструба или торца трубы. При необходимости добавляются установочные риски для обозначения положения шелыги и лотка.</p>
    
    <p><strong>👉 Главная мысль:</strong> марка трубы — это её паспорт, который содержит всю важную информацию о размерах, прочности и специальных свойствах. По марке можно точно определить, подходит ли труба для конкретных условий эксплуатации.</p>
    
    <div style="text-align: center; margin: 20px 0;">
      <button onclick="toggleMarkingExplanation()" style="background: #6b7280; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background-color 0.2s;">
        Закрыть примечание
      </button>
    </div>
  </div>
</div>`,
  },
  {
    id: 'tehnologiya-izgotovleniya',
    number: 7,
    title: 'Технология изготовления',
    keywords: ['изготовление','технология','формование','вибропрессование','центрифугирование','тепловлажностная обработка'],
    summary: 'Основные процессы производства: формование, уплотнение смеси, термообработка, распалубка и контроль.',
    content: `Трубы следует изготавливать в соответствии с требованиями настоящего стандарта, по технологической документации и рабочим чертежам, утверждённым в установленном порядке.<br/><br/>

Геометрические размеры труб (геометрические параметры), форма и размеры стыкового соединения, показатели расхода бетона и стали должны соответствовать данным, указанным в рабочих чертежах.<br/><br/>

Трубы рекомендуется изготавливать высокопроизводительными способами вибропрессования и радиального прессования.<br/><br/>

Допускается применение труб, изготовленных методом уплотнения вибрированием и центрифугированием, при наличии технико-экономического обоснования и согласования с потребителем.<br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="technology-explanation-btn" class="explanation-btn-gray" onclick="toggleTechnologyExplanation()" style="margin-right: 15px;">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
  <button id="production-technologies-btn" class="explanation-btn-gray" onclick="toggleProductionTechnologies()">
    <span style="font-weight: bold; color: white;">ПРОИЗВОДСТВО ЖЕЛЕЗОБЕТОННЫХ ТРУБ, ТЕХНОЛОГИИ</span>
  </button>
</div>

<div id="technology-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Технология изготовления (простыми словами):</h4>
    <p>Железобетонные трубы делают строго по рабочим чертежам и требованиям ГОСТа — все размеры, форма соединений и расход материалов должны полностью совпадать с проектом.</p>
    
    <p>Основные методы производства — это вибропрессование и радиальное прессование. Эти технологии считаются наиболее современными и позволяют выпускать прочные и долговечные трубы.</p>
    
    <p>Также возможен выпуск труб методом вибрирования или центрифугирования, но только при наличии обоснования и согласования с заказчиком.</p>
    
    <p><strong>👉 Суть в одном предложении:</strong> трубы изготавливаются по ГОСТу и проекту, чаще всего методом вибропрессования или радиального прессования, что обеспечивает их точность и высокое качество.</p>
    
    <div style="text-align: center; margin: 20px 0;">
      <button onclick="toggleTechnologyExplanation()" style="background: #6b7280; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background-color 0.2s;">
        Закрыть примечание
      </button>
    </div>
  </div>
</div>

<div id="production-technologies" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #f97316; margin-top: 0; font-weight: bold;">Производство железобетонных труб: современные технологии</h4>
    
    <br/>
    
    <p>Железобетонные трубы — важный элемент строительной инфраструктуры. Они используются в дорожном, коммунальном и промышленном строительстве, а также при прокладке инженерных сетей. От выбранной технологии изготовления напрямую зависят прочность, долговечность и стоимость конечной продукции.</p>
    
    <p>На практике применяются четыре основных метода: центрифугирование, вибропрессование, радиальное прессование и литьевая технология (вибрирование). Каждый из них имеет свои особенности, преимущества и ограничения.</p>
    
    <h5 style="color: #f97316; margin-top: 25px; margin-bottom: 15px; font-weight: bold;">Центрифугирование</h5>
    
    <p>Центрифугирование считается одной из первых технологий изготовления железобетонных труб. На протяжении десятилетий именно этим методом выпускались большие объёмы продукции. Его главное преимущество — возможность изготавливать трубы значительной длины, до 5–5,5 метров.</p>
    
    <p><strong>Как проходит процесс:</strong></p>
    <ol style="margin-left: 20px; margin-bottom: 15px;">
      <li>Арматурный каркас помещают в металлическую форму.</li>
      <li>Форма устанавливается в центрифугу (чаще всего ременного типа), где фиксируется в подвешенном состоянии.</li>
      <li>При вращении формы в неё подаётся бетон при помощи конвейерного бетоноукладчика.</li>
      <li>Под действием центробежных сил смесь уплотняется и распределяется по стенкам.</li>
      <li>После достижения нужной плотности форму вынимают и направляют в пропарочную камеру для твердения бетона.</li>
    </ol>
    
    <p>Существуют разные конструкции центрифуг — роликовые, осевые и ременные. Наибольшее распространение получили именно ременные. На формовку одной трубы уходит в среднем от 15 до 40 минут, в зависимости от её диаметра.</p>
    
    <p><strong>Минусы технологии:</strong></p>
    <ul style="margin-left: 20px; margin-bottom: 15px;">
      <li>невысокая производительность — каждая форма используется только для одного изделия в сутки;</li>
      <li>качество напрямую зависит от опыта оператора (ручное управление скоростью подачи смеси и вращения);</li>
      <li>высокие энергозатраты, необходимость пропарочных камер, использование тяжёлой крановой техники и большого числа рабочих;</li>
      <li>сложность распалубки и быстрый износ крепёжных элементов;</li>
      <li>невозможность выпускать трубы с защитным полиэтиленовым покрытием.</li>
    </ul>
    
    <p><strong>Плюсы:</strong></p>
    <ul style="margin-left: 20px; margin-bottom: 15px;">
      <li>можно производить трубы длиной до 5 метров;</li>
      <li>в рамках одной смены реально выпускать изделия разных диаметров.</li>
    </ul>
    
    <p>Сегодня серийного выпуска оборудования для центрифугирования практически нет, а технология считается устаревшей и малоэффективной для современных производств.</p>
    
    <div id="centrifugation-buttons-placeholder"></div>
    
    <h5 style="color: #f97316; margin-top: 25px; margin-bottom: 15px; font-weight: bold;">Вибропрессование</h5>
    
    <p>Вибропрессование — современный и наиболее распространённый способ формовки железобетонных труб. Этот метод отличается высокой скоростью, стабильным качеством изделий и минимальной потребностью в рабочей силе и площадях. Управление процессами в основном автоматизировано, что делает производство более предсказуемым и экономичным.</p>
    
    <p>На установках вибропрессования изготавливают трубы диаметром от 300 до 2400 мм и длиной 2,5–3,5 м.</p>
    
    <p><strong>Как проходит процесс:</strong></p>
    <ol style="margin-left: 20px; margin-bottom: 15px;">
      <li>Арматурный каркас устанавливают на поддон, затем вокруг него монтируется внешняя опалубка. Конструкция фиксируется.</li>
      <li>Собранную форму (поддон + каркас + опалубка) размещают на металлическом сердечнике, установленном на вибростоле.</li>
      <li>В форму подаётся бетонная смесь. При включённом вибростоле она равномерно уплотняется. Подача смеси контролируется автоматически.</li>
      <li>После заполнения включается прессующая головка, которая дополнительно уплотняет бетон совместно с вибрацией.</li>
      <li>Готовую форму снимают с сердечника и перемещают в зону твердения. Здесь опалубку снимают, а труба остаётся на поддоне до набора прочности.</li>
    </ol>
    
    <p><strong>Особенности технологии:</strong></p>
    <ul style="margin-left: 20px; margin-bottom: 15px;">
      <li>формовка одной трубы занимает всего 5–10 минут;</li>
      <li>трубы твердеют в естественных условиях под укрывными чехлами за 8–12 часов — пропарочные камеры не нужны;</li>
      <li>перемещение изделий возможно погрузчиками или кран-балками;</li>
      <li>допускается изготовление труб с полиэтиленовой футеровкой.</li>
    </ul>
    
    <p><strong>Преимущества:</strong></p>
    <ul style="margin-left: 20px; margin-bottom: 15px;">
      <li>низкие затраты на оснастку и её долговечность;</li>
      <li>высокая производительность — выпуск зависит только от числа поддонов;</li>
      <li>экономичность: нет энергозатрат на пропарку и лишний персонал;</li>
      <li>стабильное качество изделий за счёт автоматизации;</li>
      <li>возможность изготавливать в одной смене трубы разных диаметров (при двухпостовой установке — сразу два диаметра);</li>
      <li>малое время цикла формовки.</li>
    </ul>
    
    <p><strong>Оборудование:</strong></p>
    <p>Сегодня предприятия России и стран СНГ в основном используют импортные линии вибропрессования. Наиболее популярны машины компаний HawkeyePedershaab (США, ранее Дания) и PRINZING-PFEIFFER (Германия), и конечно же оборудование Китайского производства.</p>
    
    <div id="vibropressing-buttons-placeholder"></div>
    
    <h5 style="color: #f97316; margin-top: 25px; margin-bottom: 15px; font-weight: bold;">Радиальное прессование</h5>
    
    <p>Радиальное прессование — это самая производительная технология изготовления железобетонных труб. Весь цикл формовки занимает всего 2–5 минут. Метод считается инновационным, так как уплотнение бетона выполняется не вибрацией, а методом вдавливания с использованием вращающейся роликовой головки. Вибрация применяется только на этапе формирования раструбной части трубы.</p>
    
    <p><strong>Принцип работы:</strong></p>
    <ol style="margin-left: 20px; margin-bottom: 15px;">
      <li>Арматурный каркас устанавливается в форму (поддон + внешняя опалубка), аналогично вибропрессованию.</li>
      <li>Форма подводится под вал с закреплённой роликовой головкой, соответствующей конкретному диаметру трубы.</li>
      <li>В момент подачи первой части бетона включаются вибраторы, чтобы правильно сформировать раструб.</li>
      <li>Далее включается подача основной смеси, которая равномерно распределяется и уплотняется вращающейся головкой при движении снизу вверх.</li>
      <li>После завершения процесса форма снимается и перемещается в зону набора прочности. Там её распалубливают: труба остаётся на поддоне, а опалубка возвращается в работу.</li>
    </ol>
    
    <p><strong>Возможности:</strong></p>
    <ul style="margin-left: 20px; margin-bottom: 15px;">
      <li>выпускаются трубы диаметром 300–1200 мм и длиной 2,5–3,5 м;</li>
      <li>по заявлениям производителей оборудования, возможно производство труб длиной до 6 метров.</li>
    </ul>
    
    <p><strong>Плюсы технологии:</strong></p>
    <ul style="margin-left: 20px; margin-bottom: 15px;">
      <li>крайне высокая производительность (до нескольких тысяч труб в месяц);</li>
      <li>минимальные трудозатраты и отсутствие необходимости в пропарочных камерах;</li>
      <li>стабильное качество изделий благодаря автоматизации;</li>
      <li>невысокие затраты на оснастку.</li>
    </ul>
    
    <p><strong>Минусы:</strong></p>
    <ul style="margin-left: 20px; margin-bottom: 15px;">
      <li>высокая стоимость оборудования;</li>
      <li>быстрый износ рабочих элементов роликовой головки, что влияет на себестоимость;</li>
      <li>сложная и длительная переналадка при переходе на другой диаметр (до 4–8 часов);</li>
      <li>в одной смене можно производить трубы только одного типоразмера;</li>
      <li>жёсткие требования к качеству сырья;</li>
      <li>необходимость в современной технике для перемещения изделий.</li>
    </ul>
    
    <p>Радиальное прессование оправдано на заводах с большим и стабильным спросом, где нужно выпускать крупные партии труб в сжатые сроки. При правильной организации линия способна производить более 3 000 изделий в месяц.</p>
    
    <div id="radialpressing-buttons-placeholder"></div>
    
    <h5 style="color: #f97316; margin-top: 25px; margin-bottom: 15px; font-weight: bold;">Литьевая технология (вибрирование)</h5>
    
    <p>Классическая литьевая технология, или вибрирование, применяется в случаях, когда другие методы не позволяют обеспечить необходимые характеристики труб. Этот способ чаще всего используют для изделий большого диаметра (от 2 метров и более), с утолщёнными стенками (от 20 см), а также для специальных видов труб:</p>
    
    <ul style="margin-left: 20px; margin-bottom: 15px;">
      <li>дорожные конструкции большого сечения;</li>
      <li>прямоугольные толстостенные трубы;</li>
      <li>трубы для микротоннелирования диаметром свыше 1,5 м;</li>
      <li>изделия с полиэтиленовой футеровкой и повышенными требованиями к прочности.</li>
    </ul>
    
    <p><strong>Как проходит процесс:</strong></p>
    <p>Формовка выполняется в индивидуальных металлических формах, оснащённых навесными вибраторами. Нередко такие формы имеют гидравлический привод для облегчённой распалубки сердечника. Бетонная смесь уплотняется под воздействием вибрации, что позволяет получить высокопрочные изделия.</p>
    
    <p><strong>Особенности технологии:</strong></p>
    <ul style="margin-left: 20px; margin-bottom: 15px;">
      <li>метод не подходит для серийного выпуска больших партий, но позволяет изготавливать уникальные трубы;</li>
      <li>изделия отличаются высокими прочностными характеристиками;</li>
      <li>технология универсальна — можно производить трубы любых размеров и конструкций;</li>
      <li>оборудование и формы подбираются под конкретные задачи.</li>
    </ul>
    
    <p><strong>Зачем используют:</strong></p>
    <p>Литьевая технология применяется тогда, когда центрифугирование, вибропрессование или радиальное прессование не справляются с поставленными требованиями. Это своего рода «резервный» способ, позволяющий выпускать нестандартную и сложную продукцию.</p>
    
    <p>Хотя метод вибрирования не обеспечивает массового производства, он остаётся востребованным благодаря своей гибкости и возможности получения труб с особыми характеристиками. Для предприятий, ориентированных на широкий ассортимент продукции, такая технология является обязательной частью производственных мощностей.</p>
    
    <h5 style="color: #f97316; margin-top: 25px; margin-bottom: 15px; font-weight: bold;">Заключение</h5>
    
    <p>Каждая из технологий имеет своё назначение:</p>
    <ul style="margin-left: 20px; margin-bottom: 15px;">
      <li>Центрифугирование постепенно уходит в прошлое.</li>
      <li>Вибропрессование — золотой стандарт массового производства.</li>
      <li>Радиальное прессование — выбор при огромных объёмах и стабильном спросе.</li>
      <li>Литьевое вибрирование — оптимально для уникальных и крупногабаритных изделий.</li>
    </ul>
    
    <p>Благодаря разнообразию методов современные заводы могут выпускать широкий ассортимент железобетонных труб, подбирая технологию под конкретные задачи.</p>
    
    <div style="text-align: center; margin: 20px 0;">
      <button onclick="toggleProductionTechnologies()" style="background: #6b7280; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background-color 0.2s;">
        Закрыть статью
      </button>
    </div>
  </div>
</div>`,
  },
  {
    id: 'usloviya-primeneniya-rascheta',
    number: 8,
    title: 'Условия применения и расчёта',
    keywords: ['расчёт','условия применения','заглубление','нагрузки','основание','защита'],
    summary: 'Исходные данные для расчёта трубопроводов и условия эксплуатации, включая нагрузки и типы оснований.',
    content: `Трубы, предназначенные для эксплуатации в условиях действия агрессивной среды, должны удовлетворять дополнительным требованиям, установленным в проектной документации с учётом рекомендаций:<br/><br/>

СП 28.13330.2010 Защита строительных конструкций от коррозии (актуализированная редакция СНиП 2.03.11-85);<br/><br/>

СП 32.13330.2010 Канализация. Наружные сети и сооружения (актуализированная редакция СНиП 2.04.03-85).<br/><br/>

Трубы могут применяться на территориях со средней температурой наружного воздуха наиболее холодной пятидневки не ниже минус 40 °С (обеспеченность 0,92 по СП 131.13330.2012 — СНиП 23-01-99* Строительная климатология).<br/><br/>

Не допускается применение труб:<br/><br/>

в районах вечной мерзлоты;<br/><br/>

на территориях с сейсмичностью более 8 баллов (по СП 14.13330.2011 Строительство в сейсмических районах).<br/><br/>

На территориях с сейсмичностью 7 и 8 баллов могут применяться только трубы, стыкуемые с использованием резиновых уплотнительных колец.<br/><br/>

При укладке труб в просадочных, сильнопросадочных и пучинистых грунтах групп III–V (по классификации СП 34.13330.2010 Автомобильные дороги, актуализированная редакция СНиП 2.05.02-85) необходимо предусматривать специальные инженерные мероприятия, исключающие воздействие таких грунтов на трубы.<br/><br/>

Прочностные характеристики труб должны обеспечивать эксплуатацию при расчётной высоте засыпки грунтом в условиях:<br/><br/>

основание под трубой — грунтовое плоское (для труб без подошвы диаметром до 500 мм включительно и труб с подошвой всех диаметров) или грунтовое профилированное с углом охвата 90° (для труб без подошвы более 500 мм);<br/><br/>

засыпка грунтом плотностью 1,8 т/м³:<br/>
• нормальное уплотнение 0,85–0,92 по ГОСТ 22733 (для труб без подошвы диаметром до 800 мм включительно и труб с подошвой всех диаметров);<br/>
• повышенное уплотнение 0,93 (для труб без подошвы более 800 мм);<br/><br/>

временная нагрузка на поверхности земли от подвижных транспортных средств класса НК-100 (Н14) по СП 35.13330.2011 Мосты и трубы (актуализированная редакция СНиП 2.05.03-84), включая совмещённые дороги с трамвайными путями.<br/><br/>

Трубы должны соответствовать требованиям расчёта по предельным состояниям первой и второй групп.<br/><br/>

Расчёт труб следует выполнять в соответствии с СП 63.13330.2010 Бетонные и железобетонные конструкции. Основные положения (актуализированная редакция СНиП 52-01-2003). При проведении расчётов нагрузки от грунта рекомендуется определять по методике СП 66.13330.2010 Проектирование, строительство напорных сетей водоснабжения и водоотведения с применением высокопрочных труб из чугуна с шаровидным графитом.<br/><br/>

В проекте трубопровода с использованием труб, изготовленных по настоящему стандарту, должны быть указания по применению фасонных элементов (отводов, конических переходников, фитингов). Для труб диаметром 300–1000 мм рекомендуется использовать фасонные детали по номенклатуре согласно СП 66.13330.2010.<br/><br/>

В трубах допускается установка закладных монтажных изделий для защиты от электрокоррозии.<br/><br/>

Качество труб по прочности и трещиностойкости устанавливается по результатам испытаний нагружением контрольными нагрузками, значения которых указываются в проектной документации.<br/>
Качество труб по водонепроницаемости определяется испытаниями на действие внутреннего гидростатического давления 0,05 МПа.<br/><br/>

Расчётный срок эксплуатации труб — не менее 50 лет.<br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="conditions-explanation-btn" class="explanation-btn-gray" onclick="toggleConditionsExplanation()">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
</div>

<div id="conditions-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Условия применения и расчёта (простыми словами):</h4>
    <p>Железобетонные трубы можно использовать для подземных трубопроводов в большинстве климатических условий, но есть ограничения:</p>
    
    <p><strong>Климат:</strong> трубы допускается применять при температурах до –40 °C. Их нельзя использовать в районах вечной мерзлоты.</p>
    
    <p><strong>Сейсмика:</strong> в зонах с сейсмичностью свыше 8 баллов трубы применять нельзя. В районах 7–8 баллов разрешены только трубы с резиновыми уплотнительными кольцами.</p>
    
    <p><strong>Грунты:</strong> в сложных грунтах (просадочных, пучинистых) нужны специальные инженерные решения для защиты труб.</p>
    
    <p><strong>Нагрузки:</strong> трубы должны выдерживать вес грунта, транспортную нагрузку (включая трамваи и тяжёлые машины) и сохранять прочность и герметичность.</p>
    
    <p><strong>Основание:</strong> маленькие диаметры (до 500 мм) можно класть на плоское основание, крупные — на профилированное.</p>
    
    <p><strong>Качество:</strong> трубы проходят испытания на прочность, трещиностойкость и водонепроницаемость (давление воды 0,05 МПа).</p>
    
    <p><strong>Срок службы:</strong> правильно изготовленные и уложенные трубы служат не менее 50 лет.</p>
    
    <p><strong>👉 Суть в одном предложении:</strong> железобетонные трубы можно использовать почти везде, кроме вечной мерзлоты и сильной сейсмики, они должны выдерживать нагрузку грунта и транспорта, а при правильном монтаже служат больше 50 лет.</p>
    
    <div style="text-align: center; margin: 20px 0;">
      <button onclick="toggleConditionsExplanation()" style="background: #6b7280; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background-color 0.2s;">
        Закрыть примечание
      </button>
    </div>
  </div>
</div>`,
  },
  {
    id: 'materialy-beton-armirovanie',
    number: 9,
    title: 'Материалы, бетон и армирование',
    keywords: ['материалы','бетон','арматура','армирование','цемент','прочность бетона'],
    summary: 'Требования к бетону, арматурной стали, защитным слоям и коррозионной стойкости.',
    content: `<strong>Требования к бетону</strong><br/><br/>

Для изготовления труб следует применять тяжёлые и мелкозернистые бетоны по ГОСТ 26633 классов по прочности на сжатие не ниже В30.<br/><br/>

Качество материалов, применяемых для приготовления бетона, должно обеспечивать выполнение технических требований настоящего стандарта и соответствовать:<br/><br/>

цемент — ГОСТ 10178;<br/><br/>

заполнители — ГОСТ 8267 и ГОСТ 8736 (наибольшая крупность зерен крупного заполнителя 10 мм);<br/><br/>

вода — ГОСТ 23732.<br/><br/>

Применение крупного заполнителя с содержанием зерен пластинчатой и игольчатой формы свыше 25% допускается при положительных результатах испытаний труб на водонепроницаемость, прочность и трещиностойкость.<br/><br/>

<strong>Отпускная прочность бетона:</strong><br/><br/>

не менее 70% проектной — в тёплый период года;<br/><br/>

не менее 90% — в холодный период года.<br/><br/>

За холодный период принимают время, когда среднемесячная температура наружного воздуха составляет 0 °С и ниже (в соответствии с [3]).<br/><br/>

Фактическая прочность бетона (отпускная и в проектном возрасте) должна соответствовать требованиям ГОСТ 18105, в зависимости от нормируемой прочности и однородности.<br/><br/>

<strong>Водонепроницаемость бетона</strong> должна соответствовать марке по проектной документации и быть:<br/><br/>

не ниже W6 — для труб, изготовленных методом вибропрессования;<br/><br/>

не ниже W4 — для труб, изготовленных другими методами.<br/><br/>

Морозостойкость бетона устанавливается проектной документацией и указывается в заказе на изготовление.<br/><br/>

Водопоглощение бетона труб не должно превышать 6% по массе.<br/><br/>

<strong>Требования к арматурным сталям и изделиям</strong><br/><br/>

Для армирования труб используется ненапряжённая стальная арматура. Расчёт армирования проводится по СП 63.13330.2010 Бетонные и железобетонные конструкции. Основные положения (актуализированная редакция СНиП 52-01-2003).<br/><br/>

<strong>Трубы армируются сварными спиральными каркасами:</strong><br/><br/>

одинарным цилиндрическим или эллиптическим;<br/><br/>

двойным цилиндрическим.<br/><br/>

В трубах типов ТС и ТСП диаметром условного прохода 2000 мм и более, армированных двойными каркасами, допускается дополнительное армирование во втулочной части раструба и шелыги локальными дугообразными сетками.<br/><br/>

Сварные арматурные и закладные изделия должны соответствовать требованиям ГОСТ 10922 и ГОСТ 14098.<br/><br/>

Допускается изготовление двухзаходной спирали при условии замкнутого витка на концах каркаса.<br/><br/>

Спиральную и продольную арматуру цилиндрических и эллиптических каркасов следует сваривать в каждом пересечении или через одно пересечение при обязательном шахматном расположении сварных соединений.<br/><br/>

Форма и размеры арматурных и закладных изделий должны соответствовать рабочим чертежам.<br/><br/>

<strong>Для каркасов труб применяются:</strong><br/><br/>

арматурные стальные стержни классов А240 (AI) и А400 (AIII) по ГОСТ 5781 (продольная распределительная арматура);<br/><br/>

арматурная проволока классов B-I и Bp-I по ГОСТ 6727;<br/><br/>

арматура классов А500 и В500 по ГОСТ Р 52544-2006 (прокат арматурный свариваемый периодического профиля классов А500С и В500С).<br/><br/>

Для закладных изделий, предназначенных для защиты труб от электрокоррозии, применяются арматурные стали и прокат по действующим нормативным документам.<br/><br/>

<strong>Допустимые отклонения:</strong><br/><br/>

от номинального диаметра каркаса: ±5 мм — для труб до 1000 мм включительно; ±8 мм — для труб свыше 1000 мм;<br/><br/>

от номинальной длины каркаса и шага спиральной арматуры: ±5 мм;<br/><br/>

по числу шагов спиральной арматуры: ±1 — для труб длиной до 2,5 м включительно; ±2 — для труб длиной более 2,5 м.<br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="materials-explanation-btn" class="explanation-btn-gray" onclick="toggleMaterialsExplanation()">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
</div>

<div id="materials-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Материалы, бетон и армирование (простыми словами):</h4>
    <p><strong>Бетон:</strong> трубы делают из прочного тяжёлого бетона (не ниже В30). Он должен быть водонепроницаемым (от W4 до W6), морозостойким и почти не впитывать влагу (до 6%). В тёплое время труба должна достигать 70% прочности перед отпуском, зимой — не меньше 90%.</p>
    
    <p><strong>Армирование:</strong> трубы усиливают стальными каркасами (спиральными — одинарными или двойными). Для особо больших диаметров (от 2000 мм) допускают дополнительное армирование сетками.</p>
    
    <p><strong>Материалы:</strong> используют арматурные стержни и проволоку разных классов прочности, все соединения свариваются, форма и размеры каркасов должны строго совпадать с чертежами.</p>
    
    <p><strong>Точность:</strong> допуски по размерам очень маленькие — отклонения в каркасе всего несколько миллиметров.</p>
    
    <p><strong>👉 Суть в одном предложении:</strong> железобетонные трубы изготавливаются из высококачественного бетона и усиливаются сварными стальными каркасами, что обеспечивает им прочность, долговечность и устойчивость к влаге и морозу.</p>
  </div>
</div>`,
  },
  {
    id: 'trebovaniya-styku',
    number: 10,
    title: 'Требования к стыковому соединению труб',
    keywords: ['стык','соединение','раструб','уплотнение','манжета','герметичность'],
    summary: 'Конструкция раструбного соединения, типы уплотнений и критерии герметичности.',
    content: `Конструкция стыкового соединения должна обеспечивать его герметичность и неразъёмность в процессе эксплуатации.<br/><br/>

Для герметизации стыковых соединений труб применяют уплотнительные кольца из эластомерных материалов (например, резины круглого или трапециевидного сечения), а также герметики и другие материалы, соответствующие требованиям действующих нормативных документов.<br/><br/>

<div style="text-align: center; margin: 20px 0;">
  <button id="seal-sizes-btn" class="explanation-btn-gray" onclick="toggleSealSizes()">
    <span style="font-weight: bold; color: white;">РАЗМЕРЫ УПЛОТНИТЕЛЬНЫХ КОЛЕЦ</span>
  </button>
</div>

<div id="seal-sizes" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Ориентировочные размеры уплотнительных колец (манжет), клиновидный профиль, манжеты имеют сварной (клеевой) шов</h4>
    
    <div style="text-align: center; margin: 20px 0; display: flex; justify-content: center; align-items: center;">
      <img src="/Профиль манжет.png" alt="Профиль манжет" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-height: 400px; display: block; margin: 0 auto;" />
    </div>
    
    <div style="overflow-x: auto; margin: 20px 0;">
      <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <thead>
          <tr style="background: #374151; color: white;">
            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; font-weight: 600;">Диаметр трубы, мм</th>
            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; font-weight: 600;">Марка труб</th>
            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; font-weight: 600;">Длина Lp, мм</th>
            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; font-weight: 600;">Высота h, мм</th>
            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; font-weight: 600;">а, мм</th>
            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; font-weight: 600;">Вес, кг</th>
          </tr>
        </thead>
        <tbody>
                     <tr style="background: #f9fafb;">
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">d=300 мм</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">ТС 30.25-2(3,4,5)</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">1120+/-10</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">18</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">6</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">0,6*</td>
           </tr>
           <tr style="background: white;">
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">d=400 мм</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">ТС 40.25-2(3,4,5)</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">1470+/-10</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">18</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">6</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">0,7*</td>
           </tr>
           <tr style="background: #f9fafb;">
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">d=500 мм</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">ТС 50.25-2(3,4,5)</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">1840+/-10</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">18</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">6</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">0,8*</td>
           </tr>
           <tr style="background: white;">
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">d=600 мм</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">ТС 60.25-2(3,4,5)</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">2140+/-10</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">18</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">6</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">0,9*</td>
           </tr>
           <tr style="background: #f9fafb;">
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">d=800 мм</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">ТС 80.25-2(3,4,5)</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">2800+/-15</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">23</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">7</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">1,5*</td>
           </tr>
           <tr style="background: white;">
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">d=800 мм</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">ТС 80.30-2(3,4,5)</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">2800+/-15</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">23</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">7</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">1,5*</td>
           </tr>
           <tr style="background: #f9fafb;">
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">d=1000 мм</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">ТС 100.25-2(3,4,5)</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">3510+/-15</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">23</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">8</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">1,8*</td>
           </tr>
           <tr style="background: white;">
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">d=1000 мм</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">ТС 100.30-2(3,4,5)</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">3510+/-15</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">23</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">8</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">1,8*</td>
           </tr>
           <tr style="background: #f9fafb;">
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">d=1200 мм</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">ТС 120.30-2(3,4,5)</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">4130+/-15</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">23</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">8</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">2,1*</td>
           </tr>
           <tr style="background: white;">
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">d=1400 мм</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">ТС 140.30-2(3,4,5)</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">4800+/-15</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">23</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">8</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">2,9*</td>
           </tr>
           <tr style="background: #f9fafb;">
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">d=1500 мм</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">ТС 150.30-2(3,4)</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">4870+/-15</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">23</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">8</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">3,0*</td>
           </tr>
           <tr style="background: white;">
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">d=1600 мм</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">ТС 160.30-2(3,4,5)</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">5320+/-15</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">23</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">8</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">3,2*</td>
           </tr>
           <tr style="background: #f9fafb;">
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">d=2000 мм</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">ТС 200.30-2(3,4,5)</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">6400+/-15</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">23</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">8</td>
             <td style="padding: 10px; text-align: center; border: 1px solid #e5e7eb;">4,0*</td>
           </tr>
        </tbody>
      </table>
    </div>
    
            <p><strong>Примечание:</strong> *- указан ориентировочный вес манжет, фактические показатели могут отличаться от указанных</p>
    
    <div style="text-align: center; margin: 20px 0;">
      <button onclick="toggleSealSizes()" style="background: #6b7280; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background-color 0.2s;">
        Закрыть примечание
      </button>
    </div>
  </div>
</div>

<strong>Минимальный номинальный размер зазора между стыковыми поверхностями труб:</strong><br/><br/>

не менее 12 мм — для труб диаметром 300–800 мм;<br/><br/>

14 мм — для труб диаметром 1000–1500 мм;<br/><br/>

16 мм — для труб диаметром 1600–2000 мм;<br/><br/>

18 мм — для труб диаметром 2200–2400 мм;<br/><br/>

24 мм — для труб диаметром 3000 мм.<br/><br/>

<strong>Номинальный диаметр (толщина) уплотнительных колец</strong> должен быть таким, чтобы после монтажа труб (с учётом допускаемых отклонений размеров стыкуемых поверхностей раструба и втулки) обеспечивалось:<br/><br/>

сжатие уплотнительной манжеты круглого сечения — от 25% до 45% номинального диаметра;<br/><br/>

сжатие манжеты специального сечения — от 25% до 50% её толщины.<br/><br/>

Удлинение уплотнительного кольца при натяжении (после установки) должно составлять от 5% до 10%.<br/><br/>

Твёрдость материала уплотнительных манжет по Шору А должна быть в пределах 40–50 единиц.<br/><br/>

<strong>Стыковое соединение труб должно обеспечивать поворот трубопровода на угол не менее 1°30′.</strong><br/>
(Это отклонение осей соседних труб до 1°30′ (1,5°) позволяет плавно поворачивать трассу трубопровода без применения колен и дополнительных фитингов, сохраняя герметичность и надёжность соединения.)<br/><br/>

Изделия из эластомерных материалов, применяемые для герметизации стыковых соединений труб, должны соответствовать требованиям действующих нормативных документов.<br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="joint-explanation-btn" class="explanation-btn-gray" onclick="toggleJointExplanation()">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
</div>

<div id="joint-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Стыковые соединения труб (простыми словами):</h4>
    <p>Главное требование к соединению труб — оно должно быть герметичным и надёжным на весь срок эксплуатации.</p>
    
    <p>Для герметизации используют резиновые уплотнительные кольца или специальные герметики.</p>
    
    <p>Размер зазора между торцами труб зависит от диаметра (от 12 мм для маленьких до 24 мм для самых больших труб).</p>
    
    <p>Уплотнители должны сжиматься примерно на 25–45% (для круглых) или 25–50% (для специальных форм), чтобы соединение было плотным.</p>
    
    <p>Кольца должны быть прочными и эластичными: удлиняться на 5–10% и иметь твёрдость 40–50 единиц по Шору А.</p>
    
    <p>Соединение должно допускать небольшой поворот труб (до 1,5°), что позволяет делать плавные изгибы трассы без дополнительных деталей, сохраняя герметичность.</p>
    
    <p><strong>👉 Суть в одном предложении:</strong> стыковые соединения железобетонных труб делают с резиновыми уплотнителями, которые обеспечивают полную герметичность и позволяют трубопроводу слегка изгибаться без потери надёжности.</p>
  </div>
</div>`,
  },
  {
    id: 'agressivnye-sredy',
    number: 11,
    title: 'Агрессивные среды и внутренние покрытия',
    keywords: ['агрессивные среды','покрытия','защита','коры́зия','химическая стойкость','внутренние покрытия'],
    summary: 'Рекомендации по выбору покрытий и классов бетона для среды с повышенной агрессивностью.',
    content: `<strong>Дополнительные требования к трубам, предназначенным для эксплуатации в агрессивной среде</strong><br/><br/>

Комплектующие уплотнительные материалы для труб, эксплуатируемых в условиях воздействия агрессивной и биологически активной среды, должны соответствовать дополнительным требованиям, установленным проектной документацией.<br/><br/>

Трубы, применяемые в канализационных коллекторах с сильно агрессивной средой, должны иметь внутреннее защитное покрытие.<br/>
Вид и технические характеристики покрытия должны соответствовать данным, указанным в рабочих чертежах или проектной документации, и фиксироваться в заказе на изготовление труб.<br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="aggressive-explanation-btn" class="explanation-btn-gray" onclick="toggleAggressiveExplanation()">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
</div>

<div id="aggressive-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Трубы для агрессивной среды (простыми словами):</h4>
    <p>Когда трубы работают в сложных условиях — например, в канализационных коллекторах с агрессивными стоками или биологически активной средой — к ним предъявляются особые требования:</p>
    
    <p>Все уплотнительные материалы должны быть устойчивыми к химическому воздействию и соответствовать проектной документации.</p>
    
    <p>Такие трубы обязательно делают с внутренним защитным покрытием, которое защищает бетон от разрушения.</p>
    
    <p>Вид покрытия и его характеристики определяются проектом и фиксируются в заказе на изготовление.</p>
    
    <p><strong>👉 Суть в одном предложении:</strong> для эксплуатации в агрессивных средах железобетонные трубы делают с защитным внутренним покрытием и используют специальные уплотнители, стойкие к химическому воздействию.</p>
  </div>
</div>`,
  },
  {
    id: 'tochnost-kachestvo',
    number: 12,
    title: 'Точность изготовления и качество поверхностей',
    keywords: ['точность','качество','поверхность','шероховатость','дефекты','допуски'],
    summary: 'Пределы отклонений размеров, требования к ровности, отсутствие раковин, наплывов и трещин.',
    content: `<strong>Требования к точности изготовления труб</strong><br/><br/>

Значения фактических отклонений геометрических размеров труб не должны превышать предельных отклонений, указанных в таблице 1.<br/><br/>

<strong>Отклонения от перпендикулярности торцевых и боковой поверхностей</strong> бетонных труб всех типов и железобетонных труб типа ТФ и ТФП не должны превышать:<br/><br/>

• при диаметре условного прохода <span data-mark-key="diameter-300" tabindex="0" role="button" aria-label="Диаметр 300 мм">300 мм</span> — <span data-mark-key="deviation-3" tabindex="0" role="button" aria-label="Отклонение 3 мм">3 мм</span>;<br/><br/>

• при диаметре <span data-mark-key="diameter-400-600" tabindex="0" role="button" aria-label="Диаметр 400-600 мм">400, 500 и 600 мм</span> — <span data-mark-key="deviation-5" tabindex="0" role="button" aria-label="Отклонение 5 мм">5 мм</span>;<br/><br/>

• при диаметре <span data-mark-key="diameter-800-1000" tabindex="0" role="button" aria-label="Диаметр 800-1000 мм">800 и 1000 мм</span> — <span data-mark-key="deviation-8" tabindex="0" role="button" aria-label="Отклонение 8 мм">8 мм</span>;<br/><br/>

• при диаметре <span data-mark-key="diameter-1200-1800" tabindex="0" role="button" aria-label="Диаметр 1200-1800 мм">1200, 1400, 1500, 1600 и 1800 мм</span> — <span data-mark-key="deviation-10" tabindex="0" role="button" aria-label="Отклонение 10 мм">10 мм</span>;<br/><br/>

• при диаметре <span data-mark-key="diameter-2000-3000" tabindex="0" role="button" aria-label="Диаметр 2000-3000 мм">2000, 2200, 2400 и 3000 мм</span> — <span data-mark-key="deviation-12" tabindex="0" role="button" aria-label="Отклонение 12 мм">12 мм</span>.<br/><br/>

<strong>Толщина защитного слоя рабочей арматуры</strong> принимается по указаниям СП 28.13330.2010 и СП 63.13330.2010, но не менее:<br/><br/>

• <span data-mark-key="layer-15" tabindex="0" role="button" aria-label="Защитный слой 15 мм">15 мм</span> — для арматуры у наружной поверхности трубы;<br/><br/>

• <span data-mark-key="layer-20" tabindex="0" role="button" aria-label="Защитный слой 20 мм">20 мм</span> — для арматуры у внутренней поверхности трубы.<br/><br/>

Действительные отклонения толщины защитного слоя бетона до рабочей арматуры не должны превышать предельных значений по ГОСТ 13015.<br/><br/>

<strong>При формовании труб в вертикальном положении</strong> допускается опирать цилиндрические арматурные каркасы на поддон формы. Для защиты концов продольных арматурных стержней от коррозии они должны быть обмазаны битумной краской на длину <span data-mark-key="coating-25-30" tabindex="0" role="button" aria-label="Покрытие 25-30 мм">25–30 мм</span>.<br/><br/>

<strong>Для обеспечения проектной толщины защитного слоя бетона</strong> к каркасу трубы прикрепляют пластмассовые или бетонные фиксаторы:<br/><br/>

• по периметру — через <span data-mark-key="fixator-500-600" tabindex="0" role="button" aria-label="Фиксаторы 500-600 мм">500–600 мм</span>, не менее 4 шт., под углом 90° друг к другу;<br/><br/>

• по длине — не реже чем через <span data-mark-key="fixator-1000" tabindex="0" role="button" aria-label="Фиксаторы 1000 мм">1000 мм</span>.<br/><br/>

<strong>Стальные фиксаторы (скобки, хомуты)</strong>, соединяющие арматурные цилиндрические каркасы (при армировании двойными спиральными каркасами), устанавливают по периметру через два шага продольных стержней:<br/><br/>

• для труб длиной <span data-mark-key="length-4-5" tabindex="0" role="button" aria-label="Длина 4.5-5.0 м">4,5 и 5,0 м</span> — в <span data-mark-key="rows-6" tabindex="0" role="button" aria-label="6 рядов">6 рядов</span>;<br/><br/>

• длиной <span data-mark-key="length-3-5" tabindex="0" role="button" aria-label="Длина 3.5 м">3,5 м</span> — в <span data-mark-key="rows-5" tabindex="0" role="button" aria-label="5 рядов">5 рядов</span>;<br/><br/>

• длиной <span data-mark-key="length-3-0" tabindex="0" role="button" aria-label="Длина 3.0 м">3,0 м</span> — в <span data-mark-key="rows-4" tabindex="0" role="button" aria-label="4 ряда">4 ряда</span>;<br/><br/>

• длиной <span data-mark-key="length-2-2-5" tabindex="0" role="button" aria-label="Длина 2.0-2.5 м">2,0 и 2,5 м</span> — в <span data-mark-key="rows-3" tabindex="0" role="button" aria-label="3 ряда">3 ряда</span>.<br/><br/>

Допускается применение других фиксаторов, обеспечивающих фиксацию каркасов без увеличения расхода стали.<br/><br/>

<strong>Требования к качеству поверхностей</strong><br/><br/>

Размеры раковин, местных наплывов и впадин на бетонных поверхностях и торцах труб, а также сколов бетона рёбер на торцах не должны превышать значений, приведённых в таблице 2.<br/><br/>

<strong>Таблица 2 — Дефекты на бетонных поверхностях и торцах труб</strong><br/><br/>

<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.85em; background: white; border: 2px solid #374151;">
    <thead>
      <tr style="background: #374151; color: white;">
        <th rowspan="2" style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold; vertical-align: middle;">Вид поверхности</th>
        <th colspan="5" style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold;">Виды дефектов</th>
      </tr>
      <tr style="background: #374151; color: white;">
        <th colspan="2" style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Раковин</th>
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Местных наплывов и впадин</th>
        <th colspan="2" style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Сколов бетона (торцов)</th>
      </tr>
      <tr style="background: #e2e8f0;">
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;"></th>
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Диаметр, мм</th>
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Глубина, мм</th>
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">наплывов (высота) и впадин (глубина), мм</th>
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Глубина, мм</th>
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Суммарная длина на 1 м ребра, мм</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Наружная и внутренняя</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">15</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">-</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">-</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Стыковая в трубах (ТБ, ТБП, ТС и ТСП)</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">3</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">1</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">-</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">-</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Торцевая</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">15</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">50</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="background: #f8fafc; border: 2px solid #374151; border-radius: 8px; padding: 15px; margin: 15px 0;">
  <strong>Примечание:</strong> Знак "—" означает, что данное требование не распространяется на указанный вид поверхности.
</div><br/><br/>

<strong>Ширина раскрытия усадочных и технологических трещин не должна превышать <span data-mark-key="crack-0-1" tabindex="0" role="button" aria-label="Трещины 0.1 мм">0,1 мм</span>.</strong><br/><br/>

<strong>Комплектность</strong><br/><br/>

Предприятия-изготовители должны поставлять потребителю трубы типов <span data-mark-key="types-TB-TBP-TS-TSP" tabindex="0" role="button" aria-label="Типы ТБ, ТБП, ТС, ТСП">ТБ, ТБП, ТС и ТСП</span> в комплекте с уплотняющими кольцами из эластомерных материалов.<br/><br/>

По согласованию с потребителем допускается поставка труб без уплотняющих колец.<br/><br/>

<strong>Таблица 1 — Предельные отклонения от номинальных размеров труб</strong><br/><br/>

<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.9em; background: white; border: 2px solid #374151;">
    <thead>
      <tr style="background: #374151; color: white;">
        <th style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold;">Диаметр условного прохода трубы, мм</th>
        <th style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold;">Внутренний диаметр, мм</th>
        <th style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold;">Толщина стенки, мм</th>
        <th style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold;">Полезная длина, мм</th>
        <th style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold;">Глубина раструба, мм</th>
        <th style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold;">Диаметр конусной части фальцев, мм</th>
        <th style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold;">Глубина фальцев, мм</th>
        <th style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold;">Наружный диаметр втулочного конца, внутренний диаметр раструба (типов Т, ТП), мм</th>
        <th style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold;">Наружный диаметр втулочного конца и буртика, внутренний диаметр раструба (типов ТБ, ТБП, ТС и ТСП), мм</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">300</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±3</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">+10/-5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±3</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">-</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">-</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±3</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">-</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">400</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">+10/-5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±3</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">-</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">-</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">-</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">500</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">+10/-5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±3</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">-</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">-</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">-</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">600</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">+10/-5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">-</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">-</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">-</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">800</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±6</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±6</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">+10/-5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±3</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±2</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±6</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±6</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">1000</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±6</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±6</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">+10/-5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±3</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±2</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±6</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±6</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">1200</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">+10/-5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±3</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">1400</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">+10/-5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±3</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">1500</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">+10/-5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±3</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">1600</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">+10/-5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±3</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">1800</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">+10/-5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±3</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±8</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">2000</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±10</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±10</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">+12/-6</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±6</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±10</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±10</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">2200</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±10</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±10</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">+12/-6</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±6</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±10</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±10</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">2400</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±10</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±10</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">+12/-6</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±6</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±10</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±10</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">3000</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±10</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±10</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">+12/-6</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±6</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±5</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±4</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±10</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">±10</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="background: #f8fafc; border: 2px solid #374151; border-radius: 8px; padding: 15px; margin: 15px 0;">
  <strong>Примечание:</strong> Знак "—" означает, что данное требование не распространяется на трубы указанного диаметра.
</div><br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="quality-explanation-btn" class="explanation-btn-gray" onclick="toggleQualityExplanation()">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
</div>

<div id="quality-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Точность изготовления и качество поверхностей (простыми словами):</h4>
    <p>ГОСТ строго регламентирует точность изготовления железобетонных труб. Все размеры должны соответствовать заданным допускам, которые зависят от диаметра трубы.</p>
    
    <p><strong>Отклонения от перпендикулярности:</strong> торцы труб должны быть ровными, с допустимыми отклонениями от 3 до 12 мм в зависимости от диаметра.</p>
    
    <p><strong>Защитный слой бетона:</strong> арматура должна быть защищена бетоном — минимум 15 мм снаружи и 20 мм изнутри трубы.</p>
    
    <p><strong>Фиксаторы:</strong> для правильного расположения арматуры используют пластмассовые или бетонные фиксаторы, а для соединения каркасов — стальные скобки.</p>
    
    <p><strong>Качество поверхностей:</strong> не допускаются крупные раковины, наплывы и трещины шире 0,1 мм.</p>
    
    <p><strong>Комплектность:</strong> трубы с резиновыми уплотнителями поставляются в комплекте с кольцами.</p>
    
    <p><strong>👉 Главная мысль:</strong> все размеры и качество поверхностей строго контролируются, арматура защищается бетоном, а дефекты не должны превышать установленных пределов.</p>
  </div>
</div>`,
  },
  {
    id: 'pravila-priyomki',
    number: 13,
    title: 'Правила приёмки',
    keywords: ['приёмка','правила приёмки','партия','сертификат','документация'],
    summary: 'Формирование партии, сопроводительная документация, объём контроля и основания для браковки.',
    content: `<strong>Приёмка труб</strong><br/><br/>

Приёмку труб проводят партиями в соответствии с требованиями ГОСТ 13015 и настоящего стандарта.<br/><br/>

В состав партии включают трубы одного типа, последовательно изготовленные предприятием по одной технологии, из материалов одного вида и качества, в течение не более 1 мес.<br/><br/>

<strong>Число труб в партии не должно превышать:</strong><br/><br/>

• <span data-mark-key="batch-1000" tabindex="0" role="button" aria-label="Партия 1000 шт">1000 шт.</span> — для труб диаметром <span data-mark-key="diameter-300mm" tabindex="0" role="button" aria-label="Диаметр 300 мм">300 мм</span>;<br/><br/>

• <span data-mark-key="batch-500" tabindex="0" role="button" aria-label="Партия 500 шт">500 шт.</span> — для труб диаметром <span data-mark-key="diameter-400-800mm" tabindex="0" role="button" aria-label="Диаметр 400-800 мм">400–800 мм</span>;<br/><br/>

• <span data-mark-key="batch-200" tabindex="0" role="button" aria-label="Партия 200 шт">200 шт.</span> — для труб диаметром <span data-mark-key="diameter-1000-1600mm" tabindex="0" role="button" aria-label="Диаметр 1000-1600 мм">1000–1600 мм</span>;<br/><br/>

• <span data-mark-key="batch-100" tabindex="0" role="button" aria-label="Партия 100 шт">100 шт.</span> — для труб диаметром <span data-mark-key="diameter-1800-2400mm" tabindex="0" role="button" aria-label="Диаметр 1800-2400 мм">1800–2400 мм</span>;<br/><br/>

• <span data-mark-key="batch-50" tabindex="0" role="button" aria-label="Партия 50 шт">50 шт.</span> — для труб диаметром <span data-mark-key="diameter-3000mm" tabindex="0" role="button" aria-label="Диаметр 3000 мм">3000 мм</span>.<br/><br/>

<strong>Периодические испытания</strong><br/><br/>

Приёмку продукции по показателям прочности, трещиностойкости и водонепроницаемости труб, а также по показателям водонепроницаемости, морозостойкости, водопоглощения бетона и удельной эффективной активности естественных радионуклидов проводят на основании периодических испытаний.<br/><br/>

<strong>Испытания труб по прочности и трещиностойкости:</strong><br/><br/>

• перед началом массового производства;<br/><br/>

• при внесении конструктивных изменений или изменений технологии изготовления;<br/><br/>

• в процессе серийного производства — не реже:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;• один раз в <span data-mark-key="period-1month" tabindex="0" role="button" aria-label="Период 1 месяц">1 мес</span> — для труб диаметром <span data-mark-key="diameter-300mm-test" tabindex="0" role="button" aria-label="Диаметр 300 мм для испытаний">300 мм</span>;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;• один раз в <span data-mark-key="period-3month" tabindex="0" role="button" aria-label="Период 3 месяца">3 мес</span> — для труб диаметром <span data-mark-key="diameter-400-1000mm-test" tabindex="0" role="button" aria-label="Диаметр 400-1000 мм для испытаний">400–1000 мм</span>;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;• один раз в <span data-mark-key="period-6month" tabindex="0" role="button" aria-label="Период 6 месяцев">6 мес</span> — для труб диаметром свыше <span data-mark-key="diameter-1200mm-test" tabindex="0" role="button" aria-label="Диаметр свыше 1200 мм для испытаний">1200 мм</span>.<br/><br/>

Испытанию нагружением подвергают одну трубу или фрагмент трубы каждой марки, отобранные из партии.<br/><br/>

При неудовлетворительных результатах проводят повторное испытание на удвоенном числе труб. При повторном неудовлетворительном результате партию считают не выдержавшей испытания:<br/><br/>

• трубы переводят в более низкую группу по несущей способности;<br/><br/>

• трубы первой группы принимают поштучно.<br/><br/>

В процессе серийного производства периодические испытания нагружением могут не проводиться, если осуществляется неразрушающий контроль по ГОСТ 13015.<br/><br/>

<strong>Испытания на водонепроницаемость:</strong><br/><br/>

• перед началом массового производства;<br/><br/>

• далее — не реже одного раза в <span data-mark-key="period-3month-water" tabindex="0" role="button" aria-label="Период 3 месяца для водонепроницаемости">3 мес</span>.<br/><br/>

Испытанию подвергают <span data-mark-key="test-2pipes" tabindex="0" role="button" aria-label="Испытание 2 трубы">2 трубы</span> из партии.<br/><br/>

При неудовлетворительном результате хотя бы одной трубы проводят повторное испытание на удвоенном числе труб. При повторном неудовлетворительном результате партию принимают поштучно.<br/><br/>

Для труб с толщиной стенки <span data-mark-key="wall-150mm" tabindex="0" role="button" aria-label="Толщина стенки 150 мм">150 мм</span> и более испытания на водонепроницаемость могут не проводиться при обеспечении требуемых показателей по водонепроницаемости и водопоглощению бетона.<br/><br/>

Испытания по показателю удельной эффективной активности естественных радионуклидов проводят при первичном подборе состава бетона и при изменении качества материалов, если активность в новых материалах превышает характеристики ранее применяемых.<br/><br/>

<strong>Приемо-сдаточные испытания</strong><br/><br/>

Приёмку труб проводят по результатам приемо-сдаточных испытаний по показателям:<br/><br/>

• класс бетона по прочности на сжатие и отпускная прочность;<br/><br/>

• соответствие арматурных изделий рабочим чертежам;<br/><br/>

• прочность сварных соединений;<br/><br/>

• точность геометрических параметров;<br/><br/>

• толщина защитного слоя бетона до рабочей арматуры;<br/><br/>

• ширина раскрытия трещин;<br/><br/>

• качество бетонных поверхностей.<br/><br/>

Приёмку по показателям точности геометрических параметров, толщины защитного слоя, качества поверхностей (кроме стыковой поверхности раструба и втулочной части), а также ширины раскрытия трещин проводят одноступенчатым выборочным контролем.<br/><br/>

<strong>Сплошной контроль</strong><br/><br/>

Приёмку труб типа <span data-mark-key="type-TB" tabindex="0" role="button" aria-label="Тип ТБ">ТБ</span> проводят по результатам сплошного контроля:<br/><br/>

• размеры и качество стыковой поверхности раструба и втулочной части;<br/><br/>

• наличие закладных деталей;<br/><br/>

• правильность нанесения маркировочных надписей и знаков;<br/><br/>

• отметки центров шелыги и лотка (если это предусмотрено рабочими чертежами).<br/><br/>

<strong>Сопроводительные документы</strong><br/><br/>

Каждая партия труб должна сопровождаться документом о качестве по ГОСТ 13015, содержащим:<br/><br/>

• наименование и адрес предприятия-изготовителя;<br/><br/>

• номер и дату выдачи документа;<br/><br/>

• номер партии;<br/><br/>

• наименование и марку трубы;<br/><br/>

• число труб каждой марки;<br/><br/>

• класс бетона по прочности на сжатие;<br/><br/>

• отпускную прочность бетона;<br/><br/>

• марку бетона по водонепроницаемости;<br/><br/>

• марку бетона по морозостойкости (по требованию заказчика).<br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="acceptance-explanation-btn" class="explanation-btn-gray" onclick="toggleAcceptanceExplanation()">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
</div>

<div id="acceptance-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Правила приёмки труб (простыми словами):</h4>
    <p>Железобетонные трубы принимают партиями. В одной партии должны быть трубы одного типа и качества, изготовленные за месяц. Количество труб в партии зависит от диаметра: от 1000 штук для мелких (300 мм) до 50 штук для самых больших (3000 мм).</p>
    
    <p>Качество каждой партии проверяют с помощью испытаний:</p>
    
    <p><strong>Прочность и трещиностойкость</strong> — проверяют перед началом массового производства, при изменении конструкции или технологии, а затем регулярно (от 1 раза в месяц до 1 раза в полгода в зависимости от диаметра).</p>
    
    <p><strong>Водонепроницаемость</strong> — тестируют не реже одного раза в 3 месяца на двух трубах из партии.</p>
    
    <p>Дополнительно проверяют морозостойкость, водопоглощение и радиационную безопасность бетона.</p>
    
    <p>Если труба не проходит испытания, проводят повторную проверку на удвоенном числе образцов. При повторном браке партия переводится в более низкую категорию или принимается поштучно.</p>
    
    <p>Отдельно проверяются геометрические размеры, толщина защитного слоя бетона, качество поверхности и правильность сварных соединений. Для труб типа ТБ обязательна сплошная проверка стыков и маркировки.</p>
    
    <p>Каждая партия сопровождается документом о качестве, где указываются производитель, дата выпуска, номер партии, марка труб, количество, характеристики бетона (прочность, водонепроницаемость, морозостойкость).</p>
  </div>
</div>`,
  },
  {
    id: 'metody-ispytaniy',
    number: 14,
    title: 'Методы испытаний и контроля',
    keywords: ['испытания','контроль','методы','гидроиспытания','прочность','жёсткость'],
    summary: 'Процедуры проверки прочности, герметичности, водонепроницаемости и геометрических параметров.',
    content: `<strong>Методы испытаний и контроля качества труб</strong><br/><br/>

<strong>Испытания на прочность и трещиностойкость</strong><br/><br/>

Испытания труб нагружением проводят в соответствии с <span data-mark-key="gost-8829" tabindex="0" role="button" aria-label="ГОСТ 8829">ГОСТ 8829</span> по схемам, указанным в рабочих чертежах.<br/><br/>

Испытаниям подвергают одну трубу или фрагмент длиной не менее <span data-mark-key="length-1m" tabindex="0" role="button" aria-label="1 м">1 м</span>.<br/><br/>

<strong>Установка труб для испытаний</strong><br/><br/>

Трубы устанавливают горизонтально на два деревянных бруса, параллельных продольной оси трубы.<br/><br/>

Сверху на трубу кладут деревянный брус и устанавливают стальную траверсу.<br/><br/>

<strong>Таблица 3 — Размеры деревянного бруса для испытания труб</strong><br/><br/>

<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.9em; background: white; border: 2px solid #374151;">
    <thead>
      <tr style="background: #374151; color: white;">
        <th style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold;">Диаметр условного прохода трубы, мм</th>
        <th style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold;">Ширина и высота бруса, мм</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">300</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">25</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">300-500</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">50</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">600-1000</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">80</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">1200-1600</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">100</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">2000-3000</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">120</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="background: #f8fafc; border: 2px solid #374151; border-radius: 8px; padding: 15px; margin: 15px 0;">
  <strong>Примечание:</strong> В миллиметрах.
</div><br/><br/>

<strong>Выравнивающий слой</strong><br/><br/>

Под верхний и нижний брусы укладывают выравнивающий слой цементного раствора или резиновые полосы толщиной <span data-mark-key="thickness-20-30" tabindex="0" role="button" aria-label="20-30 мм">20-30 мм</span>.<br/><br/>

Твёрдость резиновых полос по Шору — от <span data-mark-key="shore-45-60" tabindex="0" role="button" aria-label="45 до 60 единиц">45 до 60 единиц</span>.<br/><br/>

Прогиб траверсы при максимальном нагружении не должен превышать <span data-mark-key="deflection-1-720" tabindex="0" role="button" aria-label="1/720 длины трубы">1/720 длины испытуемой трубы</span>.<br/><br/>

<strong>Требования к измерительным приборам</strong><br/><br/>

Погрешность измерения нагрузки — не более <span data-mark-key="error-3-percent" tabindex="0" role="button" aria-label="±3%">±3%</span>.<br/><br/>

<strong>Процедура нагружения</strong><br/><br/>

Нагружение проводят ступенями, равными <span data-mark-key="step-0-1" tabindex="0" role="button" aria-label="0,1 контрольной нагрузки">0,1 контрольной нагрузки</span>.<br/><br/>

На каждой ступени нагрузку наращивают равномерно в течение <span data-mark-key="time-2-3min" tabindex="0" role="button" aria-label="2-3 мин">2-3 мин</span> и выдерживают <span data-mark-key="hold-10min" tabindex="0" role="button" aria-label="10 мин">10 мин</span>.<br/><br/>

<strong>Измерение трещин</strong><br/><br/>

Ширину раскрытия трещин измеряют с погрешностью <span data-mark-key="crack-error-0-01" tabindex="0" role="button" aria-label="±0,01 мм">±0,01 мм</span>.<br/><br/>

<strong>Критерии прочности</strong><br/><br/>

Прочность оценивают по следующим состояниям:<br/><br/>

• Текучесть спиральной арматуры — трещины более <span data-mark-key="crack-1-5" tabindex="0" role="button" aria-label="1,5 мм">1,5 мм</span> (двойной каркас) или более <span data-mark-key="crack-2" tabindex="0" role="button" aria-label="2 мм">2 мм</span> (одинарный каркас)<br/><br/>

• Раздробление бетона от сжатия<br/><br/>

• Разрыв спиральной арматуры<br/><br/>

• Расслоение стенки трубы<br/><br/>

<strong>Критерии трещиностойкости</strong><br/><br/>

Трещиностойкость обеспечена, если при контрольной нагрузке ширина трещин не превышает контрольного значения.<br/><br/>

Для труб без трещин в эксплуатации — нагрузка при появлении первой трещины должна быть не менее контрольной.<br/><br/>

<strong>Испытания на водонепроницаемость</strong><br/><br/>

<strong>Гидростатические испытания на горизонтальных стендах</strong><br/><br/>

Испытанию подвергают <span data-mark-key="test-2-pipes" tabindex="0" role="button" aria-label="две трубы">две трубы</span>.<br/><br/>

Трубу герметически закрывают заглушками и наполняют водой без воздушных мешков.<br/><br/>

Давление повышают до <span data-mark-key="pressure-0-05" tabindex="0" role="button" aria-label="0,05 МПа">0,05 МПа</span> в течение 1 мин и выдерживают <span data-mark-key="hold-10min-water" tabindex="0" role="button" aria-label="10 мин">10 мин</span>.<br/><br/>

Точность измерения давления — не более <span data-mark-key="pressure-error-0-005" tabindex="0" role="button" aria-label="0,005 МПа">0,005 МПа</span>.<br/><br/>

Допускается замачивание труб в течение <span data-mark-key="soak-48h" tabindex="0" role="button" aria-label="48 ч">48 ч</span>.<br/><br/>

<strong>Испытания в вертикальном положении</strong><br/><br/>

Проводят для труб длиной <span data-mark-key="length-2-3-5" tabindex="0" role="button" aria-label="2,0-3,5 м">2,0-3,5 м</span> с одинарным каркасом.<br/><br/>

<strong>Таблица 4 — Показатели для испытания на водонепроницаемость</strong><br/><br/>

<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.85em; background: white; border: 2px solid #374151;">
    <thead>
      <tr style="background: #374151; color: white;">
        <th rowspan="2" style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold; vertical-align: middle;">Уровень стенок трубы</th>
        <th colspan="3" style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold;">Испытательное гидравлическое давление, кПа (кгс/см²), для труб длиной:</th>
      </tr>
      <tr style="background: #374151; color: white;">
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Верх трубы</th>
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Середина трубы</th>
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Низ трубы</th>
      </tr>
      <tr style="background: #e2e8f0;">
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;"></th>
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">кПа (кгс/см²)</th>
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">кПа (кгс/см²)</th>
        <th style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">кПа (кгс/см²)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">2,0 м</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">1,0 (0,01)</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">10,0 (0,10)</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">20,0 (0,20)</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">2,5 м</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">1,0 (0,01)</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">12,5 (0,125)</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">25,0 (0,25)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">3,0 м</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">1,0 (0,01)</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">15,0 (0,15)</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">30,0 (0,30)</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">3,5 м</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">1,0 (0,01)</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">17,5 (0,175)</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">35,0 (0,35)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">Время выдержки, ч</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">48</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">36</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">24</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="background: #f8fafc; border: 2px solid #374151; border-radius: 8px; padding: 15px; margin: 15px 0;">
  <strong>Примечание:</strong> Давление указано в кПа и кгс/см², время выдержки в часах.
</div><br/><br/>

<strong>Контроль свойств бетона</strong><br/><br/>

<strong>Прочность на сжатие</strong><br/><br/>

Определяют по <span data-mark-key="gost-10180" tabindex="0" role="button" aria-label="ГОСТ 10180">ГОСТ 10180</span> на образцах, изготовленных вибрированием.<br/><br/>

Результаты умножают на переводной коэффициент, устанавливаемый опытным путём.<br/><br/>

Допускается ультразвуковой метод (<span data-mark-key="gost-17624" tabindex="0" role="button" aria-label="ГОСТ 17624">ГОСТ 17624</span>) или механические методы (<span data-mark-key="gost-22690" tabindex="0" role="button" aria-label="ГОСТ 22690">ГОСТ 22690</span>).<br/><br/>

<strong>Водонепроницаемость</strong><br/><br/>

Определяют по <span data-mark-key="gost-12730-0" tabindex="0" role="button" aria-label="ГОСТ 12730.0">ГОСТ 12730.0</span> и <span data-mark-key="gost-12730-5" tabindex="0" role="button" aria-label="ГОСТ 12730.5">ГОСТ 12730.5</span>.<br/><br/>

<strong>Водопоглощение</strong><br/><br/>

Определяют по <span data-mark-key="gost-12730-3" tabindex="0" role="button" aria-label="ГОСТ 12730.3">ГОСТ 12730.3</span> на образцах без видимых трещин.<br/><br/>

<strong>Морозостойкость</strong><br/><br/>

Определяют по <span data-mark-key="gost-10060" tabindex="0" role="button" aria-label="ГОСТ 10060">ГОСТ 10060</span>.<br/><br/>

<strong>Радиационная активность</strong><br/><br/>

Определяют по <span data-mark-key="gost-30108" tabindex="0" role="button" aria-label="ГОСТ 30108">ГОСТ 30108</span>.<br/><br/>

<strong>Контроль арматуры</strong><br/><br/>

Сварные соединения контролируют по <span data-mark-key="gost-10922" tabindex="0" role="button" aria-label="ГОСТ 10922">ГОСТ 10922</span>.<br/><br/>

Размеры и положение арматурных каркасов определяют по <span data-mark-key="gost-17625" tabindex="0" role="button" aria-label="ГОСТ 17625">ГОСТ 17625</span> и <span data-mark-key="gost-22904" tabindex="0" role="button" aria-label="ГОСТ 22904">ГОСТ 22904</span>.<br/><br/>

<strong>Геометрический контроль</strong><br/><br/>

Проводят по <span data-mark-key="gost-26433" tabindex="0" role="button" aria-label="ГОСТ 26433">ГОСТ 26433</span>:<br/><br/>

• Толщину стенок измеряют в четырёх местах по двум взаимно перпендикулярным диаметрам<br/><br/>

• Наружные диаметры втулочного конца и буртика — по двум взаимно перпендикулярным диаметрам<br/><br/>

• Внутренний диаметр цилиндрической части — на расстоянии <span data-mark-key="distance-0-2-0-4" tabindex="0" role="button" aria-label="0,2-0,4 м">0,2-0,4 м</span> от торца<br/><br/>

• Диаметры и глубину фальцев — по двум взаимно перпендикулярным диаметрам<br/><br/>

• Высоту буртика — в четырёх местах<br/><br/>

• Длину трубы — по четырём образующим в двух диаметрально противоположных сечениях<br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="testing-explanation-btn" class="explanation-btn-gray" onclick="toggleTestingExplanation()">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
</div>

<div id="testing-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Методы испытаний и контроля (простыми словами):</h4>
    <p>Чтобы убедиться в качестве железобетонных труб, они проходят несколько обязательных проверок.</p>
    
    <p><strong>Проверка прочности и трещиностойкости</strong></p>
    
    <p>Трубы испытывают на специальных стендах: их укладывают на деревянные брусья, сверху прижимают стальной траверсой и постепенно нагружают.</p>
    
    <p>Нагрузка увеличивается поэтапно, фиксируются моменты появления и раскрытия трещин.</p>
    
    <p>Прочность считается обеспеченной, если труба выдержала нагрузку без разрушения, а трещиностойкость — если ширина трещин не превысила нормы.</p>
    
    <p><strong>Проверка водонепроницаемости</strong></p>
    
    <p>Трубы герметично закрывают заглушками, заполняют водой и создают внутреннее давление.</p>
    
    <p>Давление выдерживают в течение определённого времени (например, 10 минут при 0,05 МПа или дольше по таблице).</p>
    
    <p>Если вода не просачивается сквозь стенку и стыки — труба считается водонепроницаемой.</p>
    
    <p><strong>Проверка свойств бетона</strong></p>
    
    <p>Прочность бетона определяют по образцам или с помощью ультразвука и неразрушающих методов.</p>
    
    <p>Отдельно проверяют морозостойкость, водопоглощение и радиационную безопасность.</p>
    
    <p><strong>Контроль арматуры</strong></p>
    
    <p>Проверяют качество сварки, расположение арматурных каркасов и толщину защитного слоя бетона.</p>
    
    <p><strong>Геометрический контроль</strong></p>
    
    <p>Измеряют толщину стенок, диаметры, глубину раструба, размеры фальцев, высоту буртика и длину трубы.</p>
    
    <p>Все размеры должны укладываться в допуски по ГОСТ.</p>
    
    <p><strong>👉 Проще говоря, трубы проходят «стресс-тесты»:</strong> их нагружают, чтобы проверить прочность и устойчивость к трещинам, наполняют водой под давлением, чтобы убедиться в герметичности, а также тщательно измеряют геометрию и проверяют качество бетона и арматуры.</p>
  </div>
</div>`,
  },
  {
    id: 'transport-hranenie-garantii',
    number: 15,
    title: 'Транспортирование, хранение и гарантии изготовителя',
    keywords: ['транспортирование','транспортировка','перевозка','хранение','складирование','гарантии','поставка'],
    summary: 'Требования к безопасной перевозке, складированию на объекте и гарантийным обязательствам.',
    content: `<strong>Транспортирование, хранение и гарантии изготовителя</strong><br/><br/>

<strong>Общие требования</strong><br/><br/>

Трубы транспортируют и хранят в соответствии с требованиями <span data-mark-key="gost-13015" tabindex="0" role="button" aria-label="ГОСТ 13015">ГОСТ 13015</span> и настоящего стандарта.<br/><br/>

<strong>Положение труб при транспортировании и хранении</strong><br/><br/>

Транспортирование и хранение труб осуществляют в <span data-mark-key="working-position" tabindex="0" role="button" aria-label="рабочем положении">рабочем положении</span>, укладывая на инвентарные прокладки или опоры из дерева или других материалов.<br/><br/>

Перекатка труб допускается только по подкладкам с условием, чтобы трубы не опирались раструбами и втулочными концами на подкладки или на пол.<br/><br/>

Трубы длиной <span data-mark-key="length-2-5-3-5" tabindex="0" role="button" aria-label="2,5-3,5 м">2,5-3,5 м</span> и менее допускается транспортировать и хранить в вертикальном положении (при обеспечении их устойчивости).<br/><br/>

<strong>Хранение на складе</strong><br/><br/>

Трубы хранят на складе готовой продукции в штабелях или контейнерах, рассортированными по маркам.<br/><br/>

Число рядов труб в штабеле по высоте зависит от диаметра условного прохода (см. таблицу 5).<br/><br/>

Трубы в рядах укладывают так, чтобы раструбы двух смежных рядов были обращены в разные стороны.<br/><br/>

<strong>Таблица 5 — Число рядов труб в штабеле</strong><br/><br/>

<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.9em; background: white; border: 2px solid #374151;">
    <thead>
      <tr style="background: #374151; color: white;">
        <th style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold;">Диаметр условного прохода трубы, мм</th>
        <th style="border: 1px solid #374151; padding: 8px; text-align: center; font-weight: bold;">Число рядов труб в штабеле, шт.</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">300, 400</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">5</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">500, 600</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">4</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">800-1200</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">3</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">1400-2400</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">2</td>
      </tr>
      <tr>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center; font-weight: bold;">3000</td>
        <td style="border: 1px solid #374151; padding: 6px; text-align: center;">1</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="background: #f8fafc; border: 2px solid #374151; border-radius: 8px; padding: 15px; margin: 15px 0;">
  <strong>Примечание:</strong> Количество рядов зависит от диаметра трубы для обеспечения безопасного хранения.
</div><br/><br/>

<strong>Укладка подкладок</strong><br/><br/>

Под нижний ряд штабеля по плотному выровненному основанию укладывают параллельно две подкладки — каждая на расстоянии <span data-mark-key="distance-0-2" tabindex="0" role="button" aria-label="0,2 длины трубы">0,2 длины трубы</span> от её торцов.<br/><br/>

Конструкция подкладок должна препятствовать раскатыванию нижнего ряда труб и соприкосновению раструбов с полом склада.<br/><br/>

<strong>Требования к транспортированию</strong><br/><br/>

Погрузку, транспортирование и разгрузку труб проводят, соблюдая меры, исключающие возможность их повреждения.<br/><br/>

Автомобили или железнодорожный подвижной состав должны быть оборудованы <span data-mark-key="saddle-pads" tabindex="0" role="button" aria-label="седлообразными подкладками">седлообразными подкладками</span>, исключающими смещение и соприкосновение труб между собой.<br/><br/>

<strong>Гарантии изготовителя</strong><br/><br/>

Предприятие-изготовитель гарантирует соответствие труб требованиям стандарта при соблюдении правил транспортирования и условий применения.<br/><br/>

<strong>Гарантийный срок</strong><br/><br/>

Гарантийный срок хранения и эксплуатации труб — не менее <span data-mark-key="warranty-2-years" tabindex="0" role="button" aria-label="2 лет">двух лет</span> с даты отгрузки, но не более <span data-mark-key="warranty-2-5-years" tabindex="0" role="button" aria-label="2,5 лет">2,5 лет</span> с даты изготовления.<br/><br/>

В течение этого срока изготовитель обязан устранять обнаруженные потребителем скрытые дефекты.<br/><br/>

<strong>Гарантия прочности бетона</strong><br/><br/>

При поставке труб с отпускной прочностью бетона менее проектного класса, изготовитель гарантирует достижение проектной прочности в возрасте <span data-mark-key="age-28-days" tabindex="0" role="button" aria-label="28 дней">28 дней</span> (по ГОСТ 10180).<br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="transport-explanation-btn" class="explanation-btn-gray" onclick="toggleTransportExplanation()">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
</div>

<div id="transport-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Транспортирование, хранение и гарантии изготовителя (простыми словами):</h4>
    <p>Железобетонные трубы перевозят и хранят в строгом соответствии с ГОСТ 13015.</p>
    
    <p><strong>Положение при перевозке и хранении</strong></p>
    <p>Трубы укладывают в рабочем положении на деревянные или другие мягкие прокладки, чтобы избежать повреждений. Перекатывать трубы можно только по подкладкам — недопустимо опирать раструбы или втулочные концы на пол.</p>
    
    <p><strong>Вертикальное хранение</strong></p>
    <p>Короткие трубы (длиной до 2,5–3,5 м) можно хранить вертикально, если обеспечена их устойчивость.</p>
    
    <p><strong>Хранение на складе</strong></p>
    <p>Трубы размещают в штабелях или контейнерах, сортируя по маркам. В штабеле число рядов зависит от диаметра трубы (см. таблицу):</p>
    
    <p>• диаметр 300–400 мм → до 5 рядов;</p>
    <p>• диаметр 500–600 мм → до 4 рядов;</p>
    <p>• диаметр 800–1200 мм → до 3 рядов;</p>
    <p>• диаметр 1400–2400 мм → до 2 рядов;</p>
    <p>• диаметр 3000 мм → только 1 ряд.</p>
    
    <p>При укладке раструбы соседних рядов должны быть обращены в разные стороны.</p>
    
    <p><strong>Гарантии изготовителя</strong></p>
    <p>Завод гарантирует соответствие труб стандарту при правильной транспортировке, хранении и эксплуатации.</p>
    <p>Минимальный гарантийный срок — 2 года с даты отгрузки, но не более 2,5 лет с даты изготовления.</p>
    <p>Если трубы отгружаются с неполной прочностью бетона, производитель гарантирует, что к 28-му дню они наберут проектную прочность.</p>
    
    <p><strong>👉 Проще говоря, трубы нельзя складировать «как попало» — их укладывают на прокладки, не допускают перекоса и перекатки по бетону. Количество рядов в штабеле ограничено диаметром, а производитель даёт гарантию на качество при соблюдении всех правил.</strong></p>
  </div>
</div>`,
  },
  {
    id: 'gde-priobresti',
    number: 16,
    title: 'Где купить железобетонные трубы, производители',
    keywords: ['производители','поставщики','купить','где приобрести','ценa','заказ'],
    summary: 'Справочная информация о производителях и поставщиках, критерии выбора и запрос коммерческого предложения.',
    content: `<strong>Производители железобетонных труб по ГОСТ 6482-2011</strong><br/><br/>

<strong>ООО «Завод железобетонных труб ОДИНЕЦ»</strong><br/><br/>

Современное предприятие, специализирующееся на производстве железобетонных труб в соответствии с требованиями <span data-mark-key="gost-6482" tabindex="0" role="button" aria-label="ГОСТ 6482-2011">ГОСТ 6482-2011</span>.<br/><br/>

<strong>Производственные мощности</strong><br/><br/>

• Три производственные площадки в Московской области<br/><br/>

• Современное оборудование для производства труб всех типов<br/><br/>

• Высокие производственные мощности, контроль качества на всех этапах производства<br/><br/>

<strong>Контактная информация</strong><br/><br/>

<strong>Отдел сбыта:</strong><br/><br/>

Телефоны: <span data-mark-key="phone-1" tabindex="0" role="button" aria-label="(495) 640-04-12">(495) 640-04-12</span>, <span data-mark-key="phone-2" tabindex="0" role="button" aria-label="(495) 960-14-40">(495) 960-14-40</span><br/><br/>

Email: <span data-mark-key="email" tabindex="0" role="button" aria-label="zakaz@zavod-odinec.ru">zakaz@zavod-odinec.ru</span><br/><br/>

Сайт: <span data-mark-key="website" tabindex="0" role="button" aria-label="www.zavod-odinec.ru">www.zavod-odinec.ru</span><br/><br/>

<strong>Ассортимент продукции</strong><br/><br/>

• Трубы железобетонные безнапорные всех типов и размеров<br/><br/>

• Трубы для микротоннелирования<br/><br/>

• Трубы для дорожного строительства<br/><br/>

• Специальные трубы для агрессивных сред трубы футерованные, с внутренним полиэтиленовым покрытием<br/><br/>

<strong>Условия поставки</strong><br/><br/>

• Доставка по всей России<br/><br/>

• Возможность самовывоза с производственных площадок<br/><br/>

• Гибкие условия оплаты<br/><br/>

• Техническая поддержка и консультации<br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="purchase-explanation-btn" class="explanation-btn-gray" onclick="togglePurchaseExplanation()" style="margin-right: 15px; display: inline-block; vertical-align: top;">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
  <a href="/РазмерырастртрубОДИНЕЦ.pdf" target="_blank" class="explanation-btn-gray" style="text-decoration: none; display: inline-block; vertical-align: top;">
    <span style="font-weight: bold; color: white;">РАЗМЕРЫ РАСТРУБНЫХ ТРУБ ЗАВОДА ОДИНЕЦ</span>
  </a>
</div>

<div id="purchase-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <p>ООО «Завод железобетонных труб ОДИНЕЦ» — современное предприятие, выпускающее железобетонные трубы по ГОСТ 6482-2011.</p>
    
    <p><strong>👉 Таким образом, на сайте сразу понятно, где и у кого можно купить трубы, есть контакты, ассортимент и условия работы.</strong></p>
  </div>
</div>`,
  },
  {
    id: 'normativnye-ssylki',
    number: 17,
    title: 'Нормативные ссылки',
    keywords: ['нормативные ссылки','стандарты','ГОСТ','СНиП','СП','документы'],
    summary: 'Перечень использованных нормативных документов, на которые ссылается стандарт.',
    content: `<strong>Ссылки на межгосударственные стандарты</strong><br/><br/>

В настоящем стандарте использованы ссылки на следующие документы:<br/><br/>

<span data-mark-key="gost-12-1-005" tabindex="0" role="button" aria-label="ГОСТ 12.1.005-88">ГОСТ 12.1.005-88</span> — Система стандартов безопасности труда. Общие санитарно-гигиенические требования к воздуху рабочей зоны.<br/><br/>

<span data-mark-key="gost-12-1-007" tabindex="0" role="button" aria-label="ГОСТ 12.1.007-76">ГОСТ 12.1.007-76</span> — Система стандартов безопасности труда. Вредные вещества. Классификация и общие требования безопасности.<br/><br/>

<span data-mark-key="gost-12-1-019" tabindex="0" role="button" aria-label="ГОСТ 12.1.019-79">ГОСТ 12.1.019-79*</span> — Система стандартов безопасности труда. Электробезопасность. Общие требования и номенклатура видов защиты.<br/><br/>

На территории РФ не действует. Действует <span data-mark-key="gost-r-12-1-019" tabindex="0" role="button" aria-label="ГОСТ Р 12.1.019-2009">ГОСТ Р 12.1.019-2009</span>.<br/><br/>

<span data-mark-key="gost-12-1-030" tabindex="0" role="button" aria-label="ГОСТ 12.1.030-81">ГОСТ 12.1.030-81</span> — Система стандартов безопасности труда. Электробезопасность. Защитное заземление, зануление.<br/><br/>

<span data-mark-key="gost-12-2-003" tabindex="0" role="button" aria-label="ГОСТ 12.2.003-91">ГОСТ 12.2.003-91</span> — Система стандартов безопасности труда. Оборудование производственное. Общие требования безопасности.<br/><br/>

<span data-mark-key="gost-12-3-002" tabindex="0" role="button" aria-label="ГОСТ 12.3.002-75">ГОСТ 12.3.002-75</span> — Система стандартов безопасности труда. Процессы производственные. Общие требования.<br/><br/>

<span data-mark-key="gost-12-4-021" tabindex="0" role="button" aria-label="ГОСТ 12.4.021-75">ГОСТ 12.4.021-75</span> — Система стандартов безопасности труда. Системы вентиляционные. Общие требования.<br/><br/>

<span data-mark-key="gost-17-2-3-02" tabindex="0" role="button" aria-label="ГОСТ 17.2.3.02-78">ГОСТ 17.2.3.02-78</span> — Охрана природы. Атмосфера. Правила установления допустимых выбросов вредных веществ.<br/><br/>

<span data-mark-key="gost-2874" tabindex="0" role="button" aria-label="ГОСТ 2874-82">ГОСТ 2874-82 (Р 51232-98)</span> — Вода питьевая. Гигиенические требования и контроль качества.<br/><br/>

<span data-mark-key="gost-5781" tabindex="0" role="button" aria-label="ГОСТ 5781-82">ГОСТ 5781-82</span> — Сталь горячекатаная для армирования железобетонных конструкций.<br/><br/>

<span data-mark-key="gost-6727" tabindex="0" role="button" aria-label="ГОСТ 6727-80">ГОСТ 6727-80</span> — Проволока из низкоуглеродистой стали для армирования железобетонных конструкций.<br/><br/>

<span data-mark-key="gost-8267" tabindex="0" role="button" aria-label="ГОСТ 8267-93">ГОСТ 8267-93</span> — Щебень и гравий из плотных горных пород для строительных работ.<br/><br/>

<span data-mark-key="gost-8736" tabindex="0" role="button" aria-label="ГОСТ 8736-93">ГОСТ 8736-93</span> — Песок для строительных работ.<br/><br/>

<span data-mark-key="gost-8829" tabindex="0" role="button" aria-label="ГОСТ 8829-94">ГОСТ 8829-94</span> — Изделия строительные железобетонные и бетонные. Методы испытаний нагружением.<br/><br/>

<span data-mark-key="gost-10060-0" tabindex="0" role="button" aria-label="ГОСТ 10060.0-95">ГОСТ 10060.0-95</span> — Бетоны. Методы определения морозостойкости. Общие требования.<br/><br/>

<span data-mark-key="gost-10060-1" tabindex="0" role="button" aria-label="ГОСТ 10060.1-95">ГОСТ 10060.1-95</span> — Бетоны. Базовый метод определения морозостойкости.<br/><br/>

<span data-mark-key="gost-10060-2" tabindex="0" role="button" aria-label="ГОСТ 10060.2-95">ГОСТ 10060.2-95</span> — Бетоны. Ускоренные методы определения морозостойкости.<br/><br/>

<span data-mark-key="gost-10178" tabindex="0" role="button" aria-label="ГОСТ 10178-85">ГОСТ 10178-85</span> — Портландцемент и шлакопортландцемент.<br/><br/>

<span data-mark-key="gost-10180" tabindex="0" role="button" aria-label="ГОСТ 10180-90">ГОСТ 10180-90</span> — Бетоны. Методы определения прочности по контрольным образцам.<br/><br/>

<span data-mark-key="gost-10922" tabindex="0" role="button" aria-label="ГОСТ 10922-90">ГОСТ 10922-90</span> — Арматурные и закладные изделия сварные. Общие технические условия.<br/><br/>

<span data-mark-key="gost-12730-0" tabindex="0" role="button" aria-label="ГОСТ 12730.0-78">ГОСТ 12730.0-78</span> — Бетоны. Общие требования к методам определения плотности, влажности, водопоглощения, пористости и водонепроницаемости.<br/><br/>

<span data-mark-key="gost-12730-3" tabindex="0" role="button" aria-label="ГОСТ 12730.3-78">ГОСТ 12730.3-78</span> — Бетоны. Метод определения водопоглощения.<br/><br/>

<span data-mark-key="gost-12730-5" tabindex="0" role="button" aria-label="ГОСТ 12730.5-84">ГОСТ 12730.5-84</span> — Бетоны. Методы определения водонепроницаемости.<br/><br/>

<span data-mark-key="gost-13015" tabindex="0" role="button" aria-label="ГОСТ 13015-2003">ГОСТ 13015-2003</span> — Изделия железобетонные и бетонные для строительства. Общие технические требования.<br/><br/>

<span data-mark-key="gost-14098" tabindex="0" role="button" aria-label="ГОСТ 14098-91">ГОСТ 14098-91</span> — Соединения сварные арматуры и закладных изделий железобетонных конструкций.<br/><br/>

<span data-mark-key="gost-17624" tabindex="0" role="button" aria-label="ГОСТ 17624-87">ГОСТ 17624-87</span> — Бетоны. Ультразвуковой метод определения прочности.<br/><br/>

<span data-mark-key="gost-17625" tabindex="0" role="button" aria-label="ГОСТ 17625-83">ГОСТ 17625-83</span> — Конструкции и изделия железобетонные. Радиационный метод определения толщины защитного слоя бетона.<br/><br/>

<span data-mark-key="gost-18105" tabindex="0" role="button" aria-label="ГОСТ 18105-86">ГОСТ 18105-86 (18105-2010)</span> — Бетоны. Правила контроля прочности.<br/><br/>

<span data-mark-key="gost-22690" tabindex="0" role="button" aria-label="ГОСТ 22690-88">ГОСТ 22690-88</span> — Бетоны. Определение прочности механическими методами неразрушающего контроля.<br/><br/>

<span data-mark-key="gost-22733" tabindex="0" role="button" aria-label="ГОСТ 22733-2002">ГОСТ 22733-2002</span> — Грунты. Метод лабораторного определения максимальной плотности.<br/><br/>

<span data-mark-key="gost-22904" tabindex="0" role="button" aria-label="ГОСТ 22904-93">ГОСТ 22904-93</span> — Конструкции железобетонные. Магнитный метод определения толщины защитного слоя бетона.<br/><br/>

<span data-mark-key="gost-23009" tabindex="0" role="button" aria-label="ГОСТ 23009-78">ГОСТ 23009-78</span> — Конструкции и изделия бетонные и железобетонные сборные. Условные обозначения.<br/><br/>

<span data-mark-key="gost-23732" tabindex="0" role="button" aria-label="ГОСТ 23732-79">ГОСТ 23732-79 (23732-2011)</span> — Вода для бетонов и растворов.<br/><br/>

<span data-mark-key="gost-24547" tabindex="0" role="button" aria-label="ГОСТ 24547-81">ГОСТ 24547-81</span> — Звенья железобетонные водопропускных труб.<br/><br/>

<span data-mark-key="gost-25706" tabindex="0" role="button" aria-label="ГОСТ 25706-83">ГОСТ 25706-83</span> — Лупы. Типы, основные параметры.<br/><br/>

<span data-mark-key="gost-26433-0" tabindex="0" role="button" aria-label="ГОСТ 26433.0-85">ГОСТ 26433.0-85</span> — Система обеспечения точности геометрических параметров. Общие положения.<br/><br/>

<span data-mark-key="gost-26433-1" tabindex="0" role="button" aria-label="ГОСТ 26433.1-89">ГОСТ 26433.1-89</span> — Система обеспечения точности геометрических параметров. Элементы заводского изготовления.<br/><br/>

<span data-mark-key="gost-26633" tabindex="0" role="button" aria-label="ГОСТ 26633-91">ГОСТ 26633-91</span> — Бетоны тяжёлые и мелкозернистые.<br/><br/>

<span data-mark-key="gost-30108" tabindex="0" role="button" aria-label="ГОСТ 30108-94">ГОСТ 30108-94</span> — Материалы и изделия строительные. Определение удельной активности радионуклидов.<br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="references-explanation-btn" class="explanation-btn-gray" onclick="toggleReferencesExplanation()">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
</div>

<div id="references-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Нормативные ссылки:</h4>
    <p>ГОСТ 6482-2011 не живёт сам по себе — он связан с кучей других документов. Тут и правила безопасности труда, и нормы для цемента, песка, щебня, воды, арматуры, методы испытаний, даже санитарные нормы воздуха и шум на рабочих местах.</p>
    
    <p>Проще говоря, если собрать все эти ГОСТы в одну стопку, то получится кирпич знаний потолще, чем сами трубы 🙂</p>
    
    <p><strong>📌 Вывод:</strong></p>
    <p>Все эти ссылки нужны, чтобы трубы были не только прочные и водонепроницаемые, но ещё и безопасные для людей и экологии. А объяснить их «на пальцах» сложно — потому что ГОСТы сами по себе как отдельная вселенная. Но если коротко: хочешь надёжные трубы — будь готов дружить с ГОСТами.</p>
  </div>
</div>`,
  },
  {
    id: 'trebovaniya-bezopasnosti-eko',
    number: 18,
    title: 'Требования безопасности и охраны окружающей среды',
    keywords: ['безопасность','охрана окружающей среды','экология','охрана труда'],
    summary: 'Меры безопасности при производстве, транспортировании и монтаже, а также экологические требования.',
    content: `<strong>Требования безопасности, охраны труда и экологии</strong><br/><br/>

<strong>Общие положения</strong><br/><br/>

Трубы, изготовленные по настоящему стандарту, относятся к пожаро- и взрывобезопасным строительным изделиям.<br/><br/>

Трубы из тяжёлого бетона относятся к <span data-mark-key="class-4" tabindex="0" role="button" aria-label="4-й класс опасности">4-му классу опасности</span> (вещества малоопасные) по ГОСТ 12.1.007.<br/><br/>

<strong>Содержание вредных веществ в воздухе рабочей зоны</strong><br/><br/>

Портландцемент (силикатосодержащие пыли) — не более <span data-mark-key="pdk-8" tabindex="0" role="button" aria-label="ПДК 8.0 мг/м³">8,0 мг/м³</span>.<br/><br/>

Песок (диоксид кремния — кварц) — не более <span data-mark-key="pdk-1" tabindex="0" role="button" aria-label="ПДК 1.0 мг/м³">1,0 мг/м³</span>.<br/><br/>

<strong>Условия хранения и эксплуатации труб</strong><br/><br/>

В процессе хранения и эксплуатации трубы не выделяют токсичных веществ.<br/><br/>

При контакте с человеком трубы не оказывают вредного воздействия.<br/><br/>

Работа с трубами не требует применения специальных средств индивидуальной защиты.<br/><br/>

<strong>Санитарный контроль</strong><br/><br/>

Контроль содержания вредных веществ проводят по <span data-mark-key="sp-1-1-1058" tabindex="0" role="button" aria-label="СП 1.1.1058-2001">СП 1.1.1058-2001</span>.<br/><br/>

Санитарно-химические исследования воздуха — по ГОСТ 12.1.005, ГОСТ 12.1.007 и <span data-mark-key="gn-2-2-5-1313" tabindex="0" role="button" aria-label="ГН 2.2.5.1313-2003">ГН 2.2.5.1313-2003</span>.<br/><br/>

Оптимальные параметры микроклимата в производственных помещениях — по <span data-mark-key="sanpin-2-2-4-548" tabindex="0" role="button" aria-label="СанПиН 2.2.4.548-96">СанПиН 2.2.4.548-96</span>.<br/><br/>

<strong>Вентиляция и водоснабжение</strong><br/><br/>

Производственные помещения должны быть оборудованы приточно-вытяжной вентиляцией (<span data-mark-key="sp-60-13330" tabindex="0" role="button" aria-label="СП 60.13330.2010">СП 60.13330.2010</span>, ГОСТ 12.4.021).<br/><br/>

Концентрация вредных веществ не должна превышать ПДК (<span data-mark-key="gn-2-2-5-1313-2" tabindex="0" role="button" aria-label="ГН 2.2.5.1313-2003">ГН 2.2.5.1313-2003</span>).<br/><br/>

Помещения должны быть обеспечены питьевой водой по ГОСТ 23732.<br/><br/>

Требования к климату помещений — по <span data-mark-key="sp-131-13330" tabindex="0" role="button" aria-label="СП 131.13330.2012">СП 131.13330.2012</span> (СНиП 23-01-99).<br/><br/>

<strong>Производственное оборудование</strong><br/><br/>

Должно соответствовать ГОСТ 12.2.003, ГОСТ 12.3.002, ГОСТ 12.1.019, ГОСТ 12.1.030.<br/><br/>

Уровень звука — не более <span data-mark-key="sound-80" tabindex="0" role="button" aria-label="80 дБА">80 дБА</span> (<span data-mark-key="sn-2-2-4-562" tabindex="0" role="button" aria-label="СН 2.2.4/2.1.8.562-96">СН 2.2.4/2.1.8.562-96</span>).<br/><br/>

<strong>Нормы радиационной безопасности</strong><br/><br/>

Устанавливаются по <span data-mark-key="sanpin-2-6-1-2523" tabindex="0" role="button" aria-label="СанПиН 2.6.1.2523-2009">СанПиН 2.6.1.2523-2009</span> (НРБ-99/2009).<br/><br/>

Радиационно-гигиеническая оценка материалов проводится по документам качества поставщиков.<br/><br/>

Допустимая удельная активность радионуклидов:<br/><br/>

• в пределах населённых пунктов — не более <span data-mark-key="activity-740" tabindex="0" role="button" aria-label="740 Бк/кг">740 Бк/кг</span>;<br/><br/>

• вне населённых пунктов — не более <span data-mark-key="activity-1350" tabindex="0" role="button" aria-label="1350 Бк/кг">1350 Бк/кг</span>.<br/><br/>

<strong>Требования к персоналу</strong><br/><br/>

К работе допускаются лица не моложе <span data-mark-key="age-18" tabindex="0" role="button" aria-label="18 лет">18 лет</span>, прошедшие медосмотр, профподготовку и вводный инструктаж по технике безопасности.<br/><br/>

Периодичность инструктажей и проверок знаний по охране труда — не реже одного раза в <span data-mark-key="period-6months" tabindex="0" role="button" aria-label="6 месяцев">6 месяцев</span>.<br/><br/>

<strong>Охрана атмосферного воздуха</strong><br/><br/>

Должен быть организован постоянный контроль за соблюдением ПДВ и ПДК вредных веществ (ГОСТ 17.2.3.02, <span data-mark-key="gn-2-1-6-1338" tabindex="0" role="button" aria-label="ГН 2.1.6.1338-2003">ГН 2.1.6.1338-2003</span>).<br/><br/>

<strong>Особенности производства</strong><br/><br/>

Производство труб методом вибропрессования, радиального прессования и вибрирования является безотходным.<br/><br/>

При производстве методом центрифугирования должен обеспечиваться сбор и утилизация шлама (например, добавлением обезвоженного шлама в бетонную смесь).<br/><br/>

<strong>Контроль качества</strong><br/><br/>

При организации производства изготовитель обязан выполнить весь комплекс приёмочных испытаний, предусмотренный настоящим стандартом.<br/><br/>

<div style="text-align: center; margin: 30px 0;">
  <button id="safety-explanation-btn" class="explanation-btn-gray" onclick="toggleSafetyExplanation()">
    <span style="font-weight: bold; color: white;">СВОИМИ СЛОВАМИ</span>
  </button>
</div>

<div id="safety-explanation" class="explanation-content" style="display: none;">
  <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 15px 0;">
    <h4 style="color: #374151; margin-top: 0;">Требования безопасности и охраны окружающей среды:</h4>
    <p>Железобетонные трубы по ГОСТ 6482-2011 относятся к безопасным строительным изделиям: они не горят, не взрывоопасны и считаются малоопасными по классу воздействия на человека и окружающую среду.</p>
    
    <p><strong>Рабочие условия</strong></p>
    <p>При их производстве допускается лишь ограниченное содержание цементной пыли и кварца в воздухе рабочей зоны. На хранении и при эксплуатации трубы не выделяют токсинов и не требуют специальных средств защиты при обращении с ними.</p>
    
    <p><strong>Санитарные и климатические нормы</strong></p>
    <p>Контроль качества воздуха и микроклимата на производстве проводится по санитарным правилам и ГОСТам. Производственные помещения должны быть оборудованы вентиляцией, обеспечены питьевой водой и соответствовать установленным требованиям по температуре и шуму.</p>
    
    <p><strong>Радиационная безопасность</strong></p>
    <p>Допустимый уровень радиационной активности бетона ограничен:</p>
    <p>• до 740 Бк/кг — для применения в населённых пунктах;</p>
    <p>• до 1350 Бк/кг — для применения вне жилых зон.</p>
    
    <p><strong>Требования к персоналу</strong></p>
    <p>К производству допускаются только работники старше 18 лет, прошедшие медосмотр, обучение и регулярные инструктажи по охране труда (не реже одного раза в полгода).</p>
    
    <p><strong>Экология и производство</strong></p>
    <p>Технологии вибропрессования, радиального прессования и вибрирования считаются безотходными. При центрифугировании остаточный шлам должен собираться и утилизироваться, например, с повторным использованием в бетонной смеси.</p>
    
    <p><strong>Контроль качества</strong></p>
    <p>Изготовитель обязан проводить все предусмотренные испытания и проверки, чтобы гарантировать соответствие труб стандарту.</p>
  </div>
</div>`,
  },
];

export default sections;
