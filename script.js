const questionSets = {
  easy: [
    {
      topic: "資源回收",
      question: "下列哪一種行為最符合垃圾減量？",
      choices: ["自備水壺和餐具", "每天買一次性餐具", "把所有垃圾混在一起", "不用的電器一直開著"],
      answer: 0,
      explain: "自備容器能減少一次性用品，從源頭降低廢棄物產生。"
    },
    {
      topic: "能源",
      question: "下列哪一種屬於再生能源？",
      choices: ["煤炭", "石油", "水力", "天然氣"],
      answer: 2,
      explain: "水力、太陽能、風力等能在自然循環中持續補充，屬於再生能源。"
    },
    {
      topic: "空氣品質",
      question: "AQI 是用來提醒大家哪一件事？",
      choices: ["空氣品質狀況", "海浪高度", "土壤酸鹼值", "垃圾車路線"],
      answer: 0,
      explain: "AQI 是空氣品質指標，能協助民眾判斷戶外活動是否需要調整。"
    },
    {
      topic: "水資源",
      question: "洗菜時比較節水的方式是什麼？",
      choices: ["開著水龍頭一直沖", "用盆子裝水清洗", "把水龍頭開到最大", "洗完直接倒掉不利用"],
      answer: 1,
      explain: "用盆洗可以控制用水量，洗菜水也可拿來澆花或沖洗地面。"
    },
    {
      topic: "生物多樣性",
      question: "保護生物多樣性最重要的基礎之一是什麼？",
      choices: ["保護棲地", "把所有動物關起來", "只種同一種植物", "移除所有昆蟲"],
      answer: 0,
      explain: "棲地提供食物、躲藏和繁殖空間，是許多物種能生存的基本條件。"
    },
    {
      topic: "氣候",
      question: "日常生活中，哪一項通常能減少碳排放？",
      choices: ["短距離多走路或騎腳踏車", "冷氣開最低溫", "買很多用不到的東西", "電燈整晚不關"],
      answer: 0,
      explain: "步行、騎車或搭大眾運輸能降低燃料使用與碳排放。"
    },
    {
      topic: "塑膠減量",
      question: "減少塑膠吸管使用，主要是為了降低哪一類問題？",
      choices: ["一次性塑膠廢棄物", "地震發生率", "月亮亮度", "岩石風化速度"],
      answer: 0,
      explain: "一次性塑膠使用時間短，卻可能在環境中停留很久，減量是重要的環保行動。"
    },
    {
      topic: "濕地",
      question: "濕地常見的重要功能是什麼？",
      choices: ["過濾水質並提供生物棲地", "讓所有水消失", "阻止植物生長", "製造塑膠"],
      answer: 0,
      explain: "濕地能留住泥沙、吸附部分污染物，也是水鳥、魚蝦和昆蟲的重要生活場所。"
    },
    {
      topic: "森林",
      question: "森林裡的落葉最後常會變成什麼？",
      choices: ["土壤養分的一部分", "永遠不改變", "金屬", "玻璃"],
      answer: 0,
      explain: "落葉會被分解者分解，養分再回到土壤，形成自然循環。"
    },
    {
      topic: "環境教育",
      question: "環境教育最希望大家培養什麼能力？",
      choices: ["理解環境問題並採取行動", "只背標語不行動", "完全不關心生活環境", "只在考試前才看題目"],
      answer: 0,
      explain: "環境教育不只傳遞知識，也希望人們能在生活中做出友善環境的選擇。"
    },
    {
      topic: "海洋",
      question: "海洋垃圾可能造成什麼影響？",
      choices: ["傷害海洋生物", "讓海水變成飲料", "讓珊瑚長成金屬", "使魚不用氧氣"],
      answer: 0,
      explain: "海洋生物可能誤食或被垃圾纏繞，人類也會受到食物鏈污染的影響。"
    },
    {
      topic: "節能",
      question: "離開教室時，哪個動作最節能？",
      choices: ["關燈和關閉不用的電器", "把電風扇開到最大", "投影機整天開著", "每個插座都插滿充電器"],
      answer: 0,
      explain: "不用的設備隨手關閉，是最直接的節能方法之一。"
    },
    {
      topic: "空氣污染",
      question: "PM2.5 指的是哪一類污染物？",
      choices: ["細懸浮微粒", "大型塑膠瓶", "乾淨氧氣", "雨水顏色"],
      answer: 0,
      explain: "PM2.5 顆粒很小，可能深入呼吸道，因此空氣品質提醒中特別重要。"
    },
    {
      topic: "綠色消費",
      question: "綠色消費比較重視什麼？",
      choices: ["選擇較低污染、節能或可回收的產品", "只買最華麗包裝", "用完就丟", "買越多越好"],
      answer: 0,
      explain: "綠色消費會考量產品生命週期對環境的影響。"
    },
    {
      topic: "食物網",
      question: "蜜蜂幫植物授粉，這代表生物之間可能有什麼關係？",
      choices: ["互相幫助", "完全沒有關係", "只有競爭", "一定互相傷害"],
      answer: 0,
      explain: "蜜蜂取得花蜜，植物得到授粉機會，這是常見的互利關係。"
    },
    {
      topic: "水污染",
      question: "保護河川最適合的行為是哪一項？",
      choices: ["不把油污和垃圾倒入水溝", "把廢油倒進排水孔", "把垃圾丟到溪邊", "清潔劑越多越好"],
      answer: 0,
      explain: "水溝常連到河川或處理系統，亂倒污染物會增加水污染風險。"
    },
    {
      topic: "生態系",
      question: "分解者在生態系中主要負責什麼？",
      choices: ["分解遺體和落葉，讓養分循環", "製造陽光", "控制地球自轉", "讓水變成石頭"],
      answer: 0,
      explain: "真菌、細菌和部分小動物能分解有機物，是物質循環的關鍵角色。"
    },
    {
      topic: "噪音",
      question: "長時間暴露在高噪音環境，可能影響什麼？",
      choices: ["聽力和身心健康", "讓植物立刻開花", "讓空氣變甜", "增加河流深度"],
      answer: 0,
      explain: "噪音也是環境污染的一種，可能造成聽力、睡眠或壓力問題。"
    },
    {
      topic: "環境倫理",
      question: "環境倫理提醒我們應該如何看待自然？",
      choices: ["尊重生命與環境的價值", "只把自然當成無限資源", "任何浪費都沒關係", "只有人類需要棲地"],
      answer: 0,
      explain: "環境倫理強調人與自然的關係，提醒我們負責任地使用資源。"
    },
    {
      topic: "城市生態",
      question: "校園種植原生植物，通常能幫助什麼？",
      choices: ["在地昆蟲和鳥類取得食物", "讓垃圾自動消失", "讓水泥變透明", "讓空氣不用流動"],
      answer: 0,
      explain: "原生植物與在地生物互動密切，能提供更合適的食物和棲息空間。"
    }
  ],
  medium: [
    {
      topic: "空氣品質",
      question: "AQI 的計算概念通常是取各污染物副指標中的哪一個作為代表？",
      choices: ["最大值", "最小值", "全部相加後不換算", "只看二氧化碳"],
      answer: 0,
      explain: "AQI 會把不同污染物換算成副指標，再以影響較高的副指標代表當時空氣品質。"
    },
    {
      topic: "氣候變遷",
      question: "珊瑚白化最常與哪個環境壓力直接相關？",
      choices: ["海水溫度異常升高", "月光變強", "沙灘顏色變淡", "海鳥數量增加"],
      answer: 0,
      explain: "海水溫度過高會使珊瑚和共生藻關係失衡，導致白化風險上升。"
    },
    {
      topic: "環境影響評估",
      question: "大型開發案推動前進行環境影響評估，主要目的是什麼？",
      choices: ["預防或減輕開發對環境的不良影響", "保證工程一定最快完工", "取消所有民眾意見", "只計算建築高度"],
      answer: 0,
      explain: "環評制度用來辨識可能的環境衝擊，並提出替代方案、減輕措施或審查要求。"
    },
    {
      topic: "地下水",
      question: "地下水污染常被認為難處理，主要原因是什麼？",
      choices: ["污染擴散慢且整治費時費錢", "地下水每天自動換新", "污染物一定會立刻蒸發", "地下水不會流動"],
      answer: 0,
      explain: "地下水污染不容易被看見，污染物在地下移動和清除都相當困難。"
    },
    {
      topic: "水質指標",
      question: "若要判斷水體是否可能受到糞便污染，常用哪類指標？",
      choices: ["大腸桿菌群", "金魚數量", "水面倒影", "岩石形狀"],
      answer: 0,
      explain: "大腸桿菌群常作為糞便污染的指標，可提醒病原風險。"
    },
    {
      topic: "循環經濟",
      question: "循環經濟和傳統「製造、使用、丟棄」模式最大的差異是什麼？",
      choices: ["重視資源再利用與減少廢棄", "鼓勵產品越快壞越好", "只增加包裝量", "完全不用設計產品"],
      answer: 0,
      explain: "循環經濟希望延長產品與材料的使用生命，降低資源開採和廢棄物。"
    },
    {
      topic: "外來種",
      question: "外來入侵種可能造成的問題是什麼？",
      choices: ["競爭或捕食原生物種，改變生態系", "一定讓所有物種變多", "只會出現在室內", "不可能繁殖"],
      answer: 0,
      explain: "入侵種若缺乏天敵或適應力強，可能壓迫原生物種並改變棲地結構。"
    },
    {
      topic: "優養化",
      question: "湖泊或水庫出現藻類大量繁殖，常與哪種污染有關？",
      choices: ["氮、磷營養鹽過多", "氧氣完全消失但無污染", "岩石太多", "風聲太大"],
      answer: 0,
      explain: "農業肥料或生活污水中的氮、磷進入水體，可能造成優養化。"
    },
    {
      topic: "綠色標章",
      question: "環保標章通常強調產品具備哪些特性？",
      choices: ["低污染、節省資源或可回收", "只能使用一次", "包裝越多越好", "一定最昂貴"],
      answer: 0,
      explain: "環保標章用來協助消費者辨識較友善環境的產品。"
    },
    {
      topic: "溫室氣體",
      question: "若地球完全沒有自然溫室效應，平均氣溫大致會如何？",
      choices: ["比現在低很多", "比現在高很多", "完全不變", "每天固定 30 度"],
      answer: 0,
      explain: "自然溫室效應讓地球維持適合生命的溫度；問題在於人為排放使效應過度增強。"
    },
    {
      topic: "海洋保育",
      question: "海洋保護區的常見目的不包含哪一項？",
      choices: ["保護棲地和物種", "讓魚類資源恢復", "維持生態功能", "鼓勵任意捕撈稀有物種"],
      answer: 3,
      explain: "保護區通常會限制破壞性活動，讓重要棲地與物種有恢復機會。"
    },
    {
      topic: "土壤",
      question: "土壤受到重金屬污染後，為什麼可能影響人體健康？",
      choices: ["污染物可能進入作物與食物鏈", "土壤會立刻變成水", "重金屬會全部變成氧氣", "污染只會停在石頭裡"],
      answer: 0,
      explain: "作物可能吸收土壤中的污染物，人類再透過食物攝取而受影響。"
    },
    {
      topic: "食物里程",
      question: "選擇在地、當季食材，通常可以降低哪方面的環境負擔？",
      choices: ["運輸與冷藏造成的能源消耗", "植物行光合作用的能力", "土壤自然形成", "日夜交替"],
      answer: 0,
      explain: "在地當季食材通常能減少長途運輸、冷藏和保存所需的能源。"
    },
    {
      topic: "淨零",
      question: "2050 淨零排放中的「淨零」較接近哪個概念？",
      choices: ["排放量和移除量達到整體平衡", "完全沒有任何人類活動", "只要種一棵樹就完成", "所有能源都停止使用"],
      answer: 0,
      explain: "淨零不是毫無排放，而是盡量減排後，剩餘排放以碳匯或技術移除抵銷。"
    },
    {
      topic: "環境荷爾蒙",
      question: "環境荷爾蒙受到關注，是因為它可能干擾生物的哪個系統？",
      choices: ["內分泌系統", "岩石循環", "地磁方向", "雲層高度"],
      answer: 0,
      explain: "部分化學物質可能模擬或干擾荷爾蒙作用，影響生殖、發育或代謝。"
    },
    {
      topic: "生態廊道",
      question: "設置生態廊道的主要目的通常是什麼？",
      choices: ["連結破碎棲地，讓生物能移動交流", "讓車流更快", "讓所有植物集中到一地", "阻止動物找食物"],
      answer: 0,
      explain: "棲地破碎會阻礙遷移和基因交流，生態廊道能提高族群存續機會。"
    },
    {
      topic: "酸雨",
      question: "酸雨主要與哪些空氣污染物轉化有關？",
      choices: ["硫氧化物和氮氧化物", "純氧和氫氣", "水蒸氣和氦氣", "花粉和沙粒"],
      answer: 0,
      explain: "硫氧化物、氮氧化物可在大氣中形成酸性物質，隨降雨落下。"
    },
    {
      topic: "廢棄物",
      question: "廚餘分類回收的好處之一是什麼？",
      choices: ["可製作堆肥或作為再利用資源", "讓垃圾量變成兩倍", "使塑膠自動消失", "讓污水不需處理"],
      answer: 0,
      explain: "廚餘若妥善處理，可轉化為堆肥、飼料或能源，減少焚化與掩埋負擔。"
    },
    {
      topic: "環境政策",
      question: "污染者付費原則的精神是什麼？",
      choices: ["造成污染者應負擔防治或補救責任", "所有污染由受害者付費", "污染越多獎勵越高", "不需要追究污染來源"],
      answer: 0,
      explain: "污染者付費可促使污染源減量，並讓環境成本不再由社會共同承擔。"
    },
    {
      topic: "自然保育",
      question: "保護瀕危物種時，只保護單一個體通常不夠，還需要重視什麼？",
      choices: ["族群、棲地與食物網關係", "只要命名好聽", "把棲地改成停車場", "讓牠們遠離所有同類"],
      answer: 0,
      explain: "物種存續需要足夠族群數量、遺傳多樣性、棲地品質與完整生態互動。"
    }
  ],
  hard: [
    {
      topic: "氣候治理",
      question: "碳定價工具的核心目的較接近哪一項？",
      choices: ["讓排放者面對排碳造成的外部成本", "獎勵無限制排放", "取消所有節能技術", "只統計天氣溫度"],
      answer: 0,
      explain: "碳費、碳稅或交易制度都試圖把排放的社會成本納入決策，促進減碳。"
    },
    {
      topic: "生態學",
      question: "頂級掠食者消失後，植被也跟著改變，這種連鎖效應常稱為什麼？",
      choices: ["營養級聯", "臭氧洞", "熱島效應", "光害反射"],
      answer: 0,
      explain: "營養級聯描述食物網中某一層變化，向上或向下影響其他營養階層。"
    },
    {
      topic: "海洋化學",
      question: "海洋吸收過多二氧化碳後，常見的化學影響是什麼？",
      choices: ["海水酸化並影響鈣化生物", "鹽度一定變成零", "所有魚類立刻長翅膀", "海水不再有波浪"],
      answer: 0,
      explain: "二氧化碳溶於海水會改變碳酸鹽平衡，可能讓珊瑚、貝類等鈣化更困難。"
    },
    {
      topic: "污染傳輸",
      question: "持久性有機污染物容易造成高階消費者風險增加，主要和哪個現象有關？",
      choices: ["生物放大", "水分蒸散", "月相變化", "岩漿冷卻"],
      answer: 0,
      explain: "難分解、脂溶性的污染物可能沿食物鏈累積，高階掠食者體內濃度更高。"
    },
    {
      topic: "水污染",
      question: "BOD 偏高通常代表水體可能有什麼狀況？",
      choices: ["有機污染較多，微生物耗氧量上升", "水完全沒有生物", "水溫一定低於零度", "沒有任何污染可能"],
      answer: 0,
      explain: "BOD 是生化需氧量，有機物多時微生物分解會消耗較多溶氧。"
    },
    {
      topic: "環境風險",
      question: "風險評估中的「暴露」概念，最接近下列哪一項？",
      choices: ["人或生物接觸危害因子的程度", "污染物的顏色", "法規章節數量", "地圖比例尺"],
      answer: 0,
      explain: "有危害不等於有高風險，還需考量接觸途徑、頻率、濃度和時間。"
    },
    {
      topic: "保育遺傳",
      question: "小族群保育常擔心近親繁殖，主要原因是什麼？",
      choices: ["可能降低遺傳多樣性與適應力", "會讓族群永遠不會滅絕", "一定增加所有有利基因", "使棲地面積自動增加"],
      answer: 0,
      explain: "遺傳多樣性低會降低族群面對疾病、環境變動和繁殖問題的韌性。"
    },
    {
      topic: "環境法規",
      question: "環境影響評估中的替代方案分析，最主要的價值是什麼？",
      choices: ["比較不同方案以降低環境衝擊", "讓開發者不用提供資料", "只增加文件頁數", "避免討論環境議題"],
      answer: 0,
      explain: "替代方案能讓審查者和社會比較不同選址、規模或技術的環境影響。"
    },
    {
      topic: "空氣污染",
      question: "臭氧在平流層和對流層的環境意義為何不同？",
      choices: ["平流層可阻擋紫外線，近地面臭氧則是污染物", "兩者都只能當飲用水", "近地面臭氧一定有益健康", "平流層臭氧會造成噪音"],
      answer: 0,
      explain: "臭氧位置不同意義不同：高空臭氧層保護生命，近地面臭氧會刺激呼吸道並傷害植物。"
    },
    {
      topic: "生態服務",
      question: "授粉、水源涵養、碳吸存等通常可歸類為什麼？",
      choices: ["生態系服務", "地震規模", "礦物硬度", "交通規則"],
      answer: 0,
      explain: "生態系服務指自然系統提供給人類與其他生命的各種功能與利益。"
    },
    {
      topic: "淨零策略",
      question: "減碳策略中，為什麼通常強調先減量再抵換？",
      choices: ["抵換量有限且品質需嚴格確認", "抵換可以取代所有減量", "種樹永遠立即吸收全部排放", "排放越多越容易淨零"],
      answer: 0,
      explain: "碳抵換可能有永久性、額外性和重複計算問題，因此應優先直接減少排放。"
    },
    {
      topic: "水文",
      question: "都市大量不透水鋪面增加，常會造成什麼環境問題？",
      choices: ["逕流增加、淹水風險與熱島效應上升", "地下水一定變多", "雨水全部被土壤吸收", "河川完全不受影響"],
      answer: 0,
      explain: "不透水鋪面讓雨水難以下滲，會增加地表逕流，也提高都市升溫風險。"
    },
    {
      topic: "棲地管理",
      question: "只追求單一樹種造林，可能不利於哪一項？",
      choices: ["生物多樣性與生態韌性", "木材顏色一致", "作業方便", "樹苗排列整齊"],
      answer: 0,
      explain: "單一樹種較容易受病蟲害或氣候衝擊，也提供較少樣化的棲地。"
    },
    {
      topic: "化學品管理",
      question: "安全資料表 SDS 對環境與職安管理的用途是什麼？",
      choices: ["提供化學品危害、處置與防護資訊", "記錄學生座號", "預測明日降雨", "計算樹木年輪"],
      answer: 0,
      explain: "SDS 會列出成分、危害、防護、洩漏處理與儲存資訊，是化學品管理的重要文件。"
    },
    {
      topic: "生態指標",
      question: "指標物種被用來監測環境，是因為牠們通常具備什麼特性？",
      choices: ["對環境變化有可觀察的反應", "永遠不受環境影響", "只存在實驗室", "不需要棲地"],
      answer: 0,
      explain: "某些物種對污染、溫度、棲地品質敏感，可反映環境變化。"
    },
    {
      topic: "環境經濟",
      question: "生產者責任延伸制度 EPR 的精神是什麼？",
      choices: ["生產者需負擔產品廢棄後的回收或處理責任", "消費者不能回收", "產品越難回收越好", "只管理商品廣告"],
      answer: 0,
      explain: "EPR 讓生產者在設計、銷售後仍負責回收處理，促進易回收與減廢設計。"
    },
    {
      topic: "氣候調適",
      question: "面對氣候變遷，調適和減緩的差異是什麼？",
      choices: ["調適降低衝擊，減緩降低排放或增加碳匯", "兩者完全相同", "調適只存在海洋", "減緩只是不開窗"],
      answer: 0,
      explain: "減緩處理造成氣候變遷的來源，調適則提升社會與生態系面對衝擊的能力。"
    },
    {
      topic: "環境監測",
      question: "長期生態監測最重要的價值之一是什麼？",
      choices: ["看出短期觀察難以發現的趨勢", "只為了拍漂亮照片", "讓資料永遠不用分析", "取代所有現場管理"],
      answer: 0,
      explain: "長期資料能辨識族群變動、氣候影響和管理成效，是科學決策的重要基礎。"
    },
    {
      topic: "生態工程",
      question: "相較於全混凝土河道，兼顧生態的河川整治通常會重視什麼？",
      choices: ["棲地多樣性、自然岸線與洪水安全", "把河道全部封閉", "消除所有水生植物", "讓水流完全停止"],
      answer: 0,
      explain: "生態工程會在安全需求下保留或創造多樣棲地，降低對河川生態的破壞。"
    },
    {
      topic: "環境決策",
      question: "環境議題中納入公民參與，主要能補足什麼？",
      choices: ["在地經驗、價值討論與監督", "讓科學資料消失", "保證所有人意見相同", "不必公開資訊"],
      answer: 0,
      explain: "公民參與能讓政策更透明，也讓在地知識和受影響者的意見進入決策。"
    }
  ]
};

const levelNames = {
  easy: "簡易",
  medium: "中度難度",
  hard: "超難度"
};

let currentLevel = "easy";
let currentIndex = 0;
let score = 0;
let answered = false;
let audioContext;

const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#restartButton");
const tryAgainButton = document.querySelector("#tryAgainButton");
const nextButton = document.querySelector("#nextButton");
const difficultyButtons = document.querySelectorAll(".difficulty-button");
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#scoreText");
const progressFill = document.querySelector("#progressFill");
const topicTag = document.querySelector("#topicTag");
const levelTag = document.querySelector("#levelTag");
const questionText = document.querySelector("#questionText");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const feedbackResult = document.querySelector("#feedbackResult");
const feedbackExplain = document.querySelector("#feedbackExplain");
const resultPanel = document.querySelector("#resultPanel");
const resultTitle = document.querySelector("#resultTitle");
const resultMessage = document.querySelector("#resultMessage");
const finalScore = document.querySelector("#finalScore");
const finalPercent = document.querySelector("#finalPercent");
const quizPanel = document.querySelector(".quiz-panel");

function getQuestions() {
  return questionSets[currentLevel];
}

function playTone(isCorrect) {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return;
  audioContext ||= new AudioCtor();

  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(isCorrect ? 660 : 392, now);
  oscillator.frequency.exponentialRampToValueAtTime(isCorrect ? 880 : 523, now + 0.14);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.12, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.24);
}

function renderQuestion() {
  const questions = getQuestions();
  const item = questions[currentIndex];
  answered = false;
  nextButton.disabled = true;
  feedback.hidden = true;
  feedback.classList.remove("correct-feedback", "incorrect-feedback");
  topicTag.textContent = item.topic;
  levelTag.textContent = levelNames[currentLevel];
  questionText.textContent = item.question;
  progressText.textContent = `第 ${currentIndex + 1} / ${questions.length} 題`;
  scoreText.textContent = `${score} 題`;
  progressFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
  choices.replaceChildren();

  item.choices.forEach((choice, choiceIndex) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = choice;
    button.addEventListener("click", () => selectAnswer(choiceIndex));
    choices.append(button);
  });
}

function selectAnswer(choiceIndex) {
  if (answered) return;
  answered = true;

  const item = getQuestions()[currentIndex];
  const isCorrect = choiceIndex === item.answer;
  if (isCorrect) score += 1;

  [...choices.children].forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add("correct");
    if (index === choiceIndex && !isCorrect) button.classList.add("incorrect");
  });

  scoreText.textContent = `${score} 題`;
  feedback.classList.add(isCorrect ? "correct-feedback" : "incorrect-feedback");
  feedbackResult.textContent = isCorrect
    ? "太棒了！你抓到這題的環境關鍵。"
    : "很好的嘗試！看完解析，下一題一定更穩。";
  feedbackExplain.textContent = item.explain;
  feedback.hidden = false;
  nextButton.disabled = false;
  nextButton.textContent = currentIndex === getQuestions().length - 1 ? "看結果" : "下一題";
  playTone(isCorrect);
  nextButton.focus();
}

function showResult() {
  const questions = getQuestions();
  const percent = Math.round((score / questions.length) * 100);
  quizPanel.hidden = true;
  resultPanel.hidden = false;
  finalScore.textContent = `${score} / ${questions.length} 題`;
  finalPercent.textContent = `${percent}%`;

  if (percent >= 90) {
    resultTitle.textContent = `${levelNames[currentLevel]}：環境知識高手`;
    resultMessage.textContent = "太精彩了！你不只記得答案，也很能掌握環境議題背後的原因。";
  } else if (percent >= 70) {
    resultTitle.textContent = `${levelNames[currentLevel]}：生態解題達人`;
    resultMessage.textContent = "表現很穩！再複習幾個環保政策與污染防治概念，就能挑戰更高分。";
  } else if (percent >= 45) {
    resultTitle.textContent = `${levelNames[currentLevel]}：自然探索者`;
    resultMessage.textContent = "你已經累積不少基礎。把解析讀完後再挑戰一次，進步會很明顯。";
  } else {
    resultTitle.textContent = `${levelNames[currentLevel]}：勇敢起步者`;
    resultMessage.textContent = "願意挑戰就很棒！這些題目本來就混合生態與環保常識，再玩一次會越來越熟。";
  }

  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function nextQuestion() {
  if (currentIndex === getQuestions().length - 1) {
    showResult();
    return;
  }
  currentIndex += 1;
  renderQuestion();
}

function setLevel(level) {
  currentLevel = level;
  difficultyButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.level === level);
  });
  restartQuiz(false);
}

function restartQuiz(shouldScroll = true) {
  currentIndex = 0;
  score = 0;
  quizPanel.hidden = false;
  resultPanel.hidden = true;
  nextButton.textContent = "下一題";
  renderQuestion();
  if (shouldScroll) quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

startButton.addEventListener("click", () => {
  quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

difficultyButtons.forEach((button) => {
  button.addEventListener("click", () => setLevel(button.dataset.level));
});

restartButton.addEventListener("click", () => restartQuiz());
tryAgainButton.addEventListener("click", () => restartQuiz());
nextButton.addEventListener("click", nextQuestion);

renderQuestion();
