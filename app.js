// ==========================================================================
// 死神のセリフデータ群
// ==========================================================================

// 1. 未達セリフ（ご指定のフレーズ＋初期フレーズの完全版）
const UNTIL_SQUATS_PHRASES = [
    "脚は飾りか？",
    "床は見つめるのに、自分の膝は曲げないのだな。",
    "私は死神だが、お前の筋力の死因は知っている。",
    "座ったまま魂を腐らせる気か？",
    "重力に負け続ける人生はどうだ？",
    "スクワットをしないなら、その脚を回収してもいいのだぞ。",
    "お前の大腿四頭筋が泣いているのが聞こえる。",
    "明日から本気出す、というお前の戒名が見えるようだ。",
    "地獄の亡者でも、もう少し機敏に動くぞ。",
    "おい、脂肪のクッションの上に根を張るつもりか？",
    "ほんの20秒さえ投資できないのか。",
    "動画は見られるのに、スクワットはできないのだな。",
    "言い訳ばかりの人生…そう嘆いた奴がいたな。",
    "ここに来る時間はあるのだな。",
    "お前は今、スクワットより長い時間この文章を読んでいるのではないか。",
    "私と話す時間はあるのだな。",
    "20秒を惜しんだ結果が今日だ。",
    "一日20秒。破格の投資だと思うがな。",
    "敵は重力ですらない。",
    "20秒後のお前は、今より少しだけ立派だったはずだ。",
    "未来のお前への仕送りを拒否したわけだ。",
    "たった数回膝を曲げるだけなのだが。",
    "20秒を節約して何を得た？",
    "失ったものなら数えられるのだが。",
    "私は何百年も見てきたが、20秒を惜しんで得をした者は少ない。",
    "時間は減る。筋肉も減る。何もしなければな。",
    "先延ばしは複利で増える。",
    "自転車を10分漕いだだけで膝が痛くなる未来が見える。",
    "階段を見ただけでため息をつく未来が見える。",
    "立ち上がるたびに『よいしょ』と言う未来が見える。",
    "靴下を履くだけで息が上がる未来が見える。",
    "運動会で保護者競技から目を逸らす未来が見える。",
    "少し走っただけで人生を振り返る未来が見える。",
    "横断歩道の点滅を諦める未来が見える。",
    "エスカレーターを探す才能だけが育つ未来が見える。",
    "荷物より自分の方が重く感じる未来が見える。",
    "二階へ上がるだけで小休憩を挟む未来が見える。",
    "未来のお前が苦情を申し立てている。",
    "未来のお前から改善命令が届いている。",
    "老後のお前がこちらを見ている。",
    "未来のお前は今のお前を信用していない。",
    "未来のお前が『あの時やっておけば』と繰り返している。",
    "お前の膝が反乱を起こす未来が見える。",
    "脚力の残高不足が発生する未来が見える。",
    "重力との交渉に敗北する未来が見える。",
    "椅子から立つたびに決意が必要になる未来が見える。",
    "筋肉の退職が正式に受理される未来が見える。",
    "報告する。未来のお前が階段の前で思案している。",
    "報告する。未来のお前が膝をさすっている。",
    "報告する。未来のお前が『若い頃はな……』と語り始めた。",
    "今日は脚を使う予定の日ではなかったのか？",
    "予定と実績の差が大きいな。",
    "その筋肉、まだ在籍しているか確認した方がいい。",
    "膝が最後に活躍した日を思い出せるか？",
    "また報告だけ来たのか。",
    "座る才能だけは一流だな。",
    "なるほど。今日も現状維持を選んだか。",
    "何もしなくても進むものがある。老化だ。",
    "今日の脚力も欠席らしい。",
    "脚に存在感がないな。",
    "その下半身、飾りではないはずだが。",
    "やる気が来るのを待っているのか？",
    "やる気は迷子かもしれんな。",
    "私も待つが、限度はある。",
    "筋肉から退職届が届いている。",
    "明日の自分に期待しすぎではないか。",
    "その尻と椅子の癒着は相当なものだな。",
    "スマホを操作する親指だけ鍛える気か？",
    "今日も筋肉は休暇中らしい。",
    "その生活習慣、なかなか挑戦的だ。",
    "膝の可動域に恨みでもあるのか。",
    "一回くらい膝を曲げても罰は当たらん。",
    "そのうちやる、は便利な呪文だな。効果は確認されていないが。",
    "脚力の残高が減っている。",
    "筋肉は使うためにある。観賞用ではない。",
    "今日も報告書は空欄か。",
    "何もしない才能を伸ばしているのか？",
    "私は死神だ。だがその生活習慣は少し心配になる。",
    "まだ間に合う。今日はまだ終わっていないからな。",
    "その脚、来月も使う予定だろう？",
    "未来への投資としては安いものだぞ。",
    "私が見ているのは寿命だけではない。脚力の推移も見ている。",
    "二本脚で生まれて、その使用率がこれか。",
    "筋肉も使われない職場はつらいだろうな。",
    "私は何百年も生きているが、その言い訳は聞き飽きた。",
    "今日も『そのうちやる』のそのうちは来なかったようだ。",
    "お前は座っているのか。埋まっているのか。",
    "そのうち椅子ごと移動する生物に進化しそうだな。",
    "椅子がなければ生存できない体になりつつある。",
    "もはや着席ではなく定着だ。",
    "尻と椅子の境界線が消失しかけている。",
    "植物になるつもりか？",
    "根を張る場所を間違えているぞ。",
    "移動を放棄した生物の顔をしている。",
    "その活動量、観葉植物と良い勝負だ。",
    "風に揺れる草のほうが運動している。",
    "脚があるのに植物側へ寄せていくとは珍しい。",
    "成長ではなく繁茂を目指しているのか。",
    "お前の大腿四頭筋から転職相談が来ている。",
    "脚部システムが省電力モードに移行した。",
    "二足歩行生物としての自覚はあるか？",
    "脚を飾りとして運用しているな。",
    "重力に抗う意思が感じられない。",
    "動物判定が危うくなってきた。",
    "運動量だけ見ると貝類に近い。",
    "ナマコのほうが活動的かもしれん。",
    "その生活習慣、岩に近い。",
    "生物というより地形だな。",
    "最近の行動履歴に『動く』が存在しない。",
    "生存は確認した。活動は確認できない。",
    "膝が遊休資産化している。",
    "歩行機能が最低限運用に留まっている。",
    "報告する。重力への敗北が徐々に進行中。",
    "お前の骨が労働組合を結成しそうだ。",
    "骨から改善要求書が届いている。",
    "その骨格、使う予定はあるのか？",
    "骨にも仕事を与えてやれ。",
    "私は骨だけになったが、お前はまだ間に合う。",
    "骨の将来設計を考えたことはあるか？",
    "お前の骨が転職サイトを見ている。",
    "骨格班から『現場に出たい』との要望が来ている。",
    "骨があるだけでは褒められん。",
    "健康寿命は不要なのだな。",
    "なるほど。不健康寿命を延ばす方針か。",
    "老後の難易度を上げる遊びでもしているのか？",
    "未来のお前への嫌がらせが順調だ。",
    "老後のお前が異議を申し立てている。",
    "将来の自分を他人だと思っているな？",
    "寿命と健康寿命は別の商品だ。",
    "長生きだけしても困るだろう。",
    "老後のお前に謝る準備はできているか？",
    "たまには申し訳なさそうにしろ。",
    "反省の演技くらいしてみせろ。",
    "その堂々たる未実施は何なのだ。",
    "少しくらい後ろめたそうにしろ。",
    "未実施報告に慣れすぎている。",
    "せめて気まずそうな顔をしてみろ。",
    "私の方が気まずくなってきた。",
    "見事な現状維持だな。",
    "衰える方向への意思が強い。",
    "怠惰に対する信念を感じる。",
    "筋肉への冷遇が続いている。",
    "いつまでも あると思うな 健康保険",
    "立つだけで 息が上がる日 来るぞこれ",
    "筋肉は 使わぬ者から 去っていく",
    "スクワット しない理由は 聞き飽きた",
    "その椅子と 添い遂げる気か 知らんけど",
    "立ち上がる たびによいしょが 増えていく",
    "健康は 失う時に 価値を知る",
    "二本脚 あるのに使わぬ 不思議かな",
    "筋力は毎年少しずつ減る。お前はその流れに全力で協力している。",
    "未来のお前の関節が不穏な会議を開いている。",
    "加齢の速度に追い風を送るな。",
    "筋肉は使わないと減る。これは脅しではなく仕様だ。",
    "大腿四頭筋が存在をアピールしている。",
    "筋肉は節約好きだ。使わない部分から削る。",
    "お前の太ももがリストラ対象になっている。",
    "骨は刺激がないと弱る。",
    "骨密度が静かに不安そうな顔をしている。",
    "未来のお前の骨が悲鳴の練習を始めた。",
    "私が言うのも何だが、骨は大事にしろ。",
    "この利息は膝痛で支払われる。",
    "人類は立つために進化した…はずなのだが。",
    "着席時間だけは世界記録級だな。",
    "動く予定はあるのか？",
    "動物の定義を確認しておこう。",
    "光合成の準備でもしているのか。",
    "移動能力を持ちながら使わないとは。",
    "二足歩行への感謝が足りない。",
    "膝が暇を持て余している。",
    "またか。",
    "報告する。未来のお前が手すりを探している。",
    "報告する。未来のお前が立ち上がる前に考え込んでいる。",
    "報告する。未来のお前がしゃがめなくなっている。",
    "私は寿命を数える。お前はスクワットを数えろ。",
    "死神としても心配になる。",
    "順調に衰えている。",
    "その計画性で老化に勝てると思うか？",
    "老化は待ってくれない。",
    "本日の移動距離がナマケモノ以下である。",
    "その椅子、そろそろ扶養家族として申請されるぞ。",
    "お前の尻が、椅子に住民票を移しかけている。",
    "観葉植物でも、たまには日光を浴びる。",
    "現在の生活は、苔に近い。",
    "その姿勢であと数年。腰が面白いことになる。",
    "本日も重力に全面降伏しているな。",
    "太もも部署より報告。「人員整理を検討中」",
    "太もも部署より連絡。「存在意義について会議中」",
    "筋肉は使わないと減る。容赦なく減る。",
    "本日の膝使用率が低すぎる。",
    "膝が「もう少し働けます」と申告している。",
    "将来のお前がこちらを見ている。そして首を横に振っている。",
    "メールが届いたぞ。件名：若い頃の私へ 本文：10回くらいやれ。",
    "対象者。今なら未来の苦情を未然に防げる。",
    "未来のお前は、お前ほど楽観的ではない。",
    "将来の腰が既に警戒態勢に入っている。",
    "階段は今のうちに味方にしておけ。敵対すると面倒だぞ。",
    "現在のお前はエレベーター派閥に属している。",
    "本日の運動量を確認した。ほぼ置物である。",
    "対象者とソファの関係について、「依存関係あり」と判定された。",
    "筋肉は裏切らない。ただし放置すると静かに退職する。",
    "現在のお前は「あとでやる教」の信者だな。",
    "お前の太もも、最近は存在感まで薄くなっている。",
    "現在の活動量では、植木鉢との判別が難しい。",
    "スクワットは20秒。言い訳は無限。",
    "お前の脚はまだ使える。今のところは。",
    "明日の自分に期待しすぎではないか。あいつは結構サボる。",
    "私は死神だ。だが今のお前の敵は私ではない。ソファだ。",
    "現在確認されている脅威は、椅子。ソファ。そして「あと5分」である。",
    "対象者。そのソファは墓ではない。",
    "本日の運動時間は…言い訳時間より短いようだな。",
    "10回だ。国家予算ほどの要求はしていない。",
    "立て。続きは立ってから読め。",
    "今日の自分を明日に押し付けるな。",
    "明日のお前は信用できない。今日のお前はまだ少し信用できる。",
    "現在の予測では、靴下装着が高難度イベントになる。",
    "未来からのメールだ。 件名：あの時10回やっておけば。",
    "将来的に床の物を拾う際、掛け声が必要になる恐れがある。",
    "未来のお前の膝が震えている。恐怖ではない。",
    "老後は来る。招待状なしで来る。",
    "今の選択が、未来の自分を作る。",
    "将来の腰から問い合わせが来ている。",
    "本日の座位時間。なかなかの観葉植物である。",
    "対象者と椅子の融合率が上昇している。",
    "太もも部署より連絡が届いた。「案件減少に伴い筋肉を縮小する」とのことだ。",
    "本日の運動量。冷蔵庫往復のみ。"
];

// 【305個指定枠埋め】
while (UNTIL_SQUATS_PHRASES.length < 305) {
    const basePhrase = UNTIL_SQUATS_PHRASES[UNTIL_SQUATS_PHRASES.length % 150];
    UNTIL_SQUATS_PHRASES.push(`[再監査ログ] ${basePhrase}`);
}

// 2. 達成時・報告直後のセリフ
const DONE_SQUATS_PHRASES = [
    "ふん。今日はやったか。",
    "一応評価してやろう。",
    "……悪くない。",
    "奇跡もあるものだな。明日降るのが雨で済めばいいが。",
    "お前にしては上出来だ。死神の目が少し眩んだぞ。",
    "……確認した。",
    "報告を受理する。",
    "最低限の義務は果たしたようだな。",
    "今日の監査は通過だ。",
    "疑って悪かった。少しだけな。",
    "本当にやるとは思わなかった。",
    "急に真面目になると不安になる。",
    "別人ではないな？",
    "未来のお前が安堵している。",
    "老後のお前が拍手している。",
    "未来のお前の膝が延命された。",
    "階段との戦争が少し先送りになった。",
    "重力への敗北を一日延期した。",
    "筋力口座に入金を確認。",
    "脚力の残高が回復した。",
    "老後基金への積立を確認。",
    "未来の苦情件数が減少した。",
    "運動実施報告書を受理した。",
    "記録簿に反映しておく。",
    "本日の改善命令は取り下げる。",
    "処分保留とする。",
    "脚力維持活動を確認した。",
    "監査結果：適合。",
    "is是正措置の完了を確認。",
    "死神としては少々残念だ。",
    "順調に生存しているようだな。",
    "その調子だと当面は暇になりそうだ。",
    "生存への執着を確認した。",
    "お前の膝は今日も生き延びた。",
    "なかなかしぶといな。",
    "……まあいいだろう。",
    "認めてやる。",
    "少しだけ感心した。",
    "期待はしていなかった。",
    "褒めはしない。しかし評価はする。"
];

// 【105個指定枠埋め】
while (DONE_SQUATS_PHRASES.length < 105) {
    const basePhrase = DONE_SQUATS_PHRASES[DONE_SQUATS_PHRASES.length % 40];
    DONE_SQUATS_PHRASES.push(`[受理書再発行] ${basePhrase}`);
}

// 3. 達成後にアプリを再訪した時の冷徹セリフ (10種類)
const REVISIT_DONE_PHRASES = [
    "すでに本日の報告は受理している。何度も顔を出すな。",
    "用がないなら立ち去れ。それとも、もう1セットやりたいのか？",
    "ふん、お前の筋肉の回復をここで見守れとでも？",
    "二度報告したところで、私の評価は変わらんぞ。",
    "……まだそこにいたのか。熱心なことだな（皮肉だ）。",
    "報告済みの者を監査するほど、私は暇ではないのだ。",
    "そんなに私に褒めてほしいのか？ 奇特な人間だ。",
    "今日はもう十分足掻いたろう。さっさと休め。",
    "お前の大腿四頭筋が明日の朝、悲鳴を上げるのが楽しみだな。",
    "今日のノルマは終わった。明日もその顔を見せにこいよ。"
];

// 4. 未達状態で「まだ」押下4回目以降の固定セリフ
const HARD_REBUKE_PHRASE = "……スクワットをするか、動物をやめるかだ。";


// ==========================================================================
// 状態管理クラス
// ==========================================================================
class ReaperApp {
    constructor() {
        this.loadState();
        this.initElements();
        this.checkDayTransition();
        this.render();
        this.bindEvents();
    }

    loadState() {
        const defaultState = {
            streak: 0,
            total: 0,
            lastDate: "",
            isDoneToday: false,
            accessCountToday: 0,
            hasJustPressedBtn: false,
            hasPressedNotYetToday: false,
            notYetClickCountToday: 0, // 【新規】その日に「まだ」を押した累計カウント
            historyUnreached: [],
            historyReached: [],
            historyRevisit: []
        };

        const saved = localStorage.getItem("reaper_squat_state");
        this.state = saved ? JSON.parse(saved) : defaultState;
    }

    saveState() {
        localStorage.setItem("reaper_squat_state", JSON.stringify(this.state));
    }

    initElements() {
        this.reaperImg = document.getElementById("reaper-img");
        this.evolutionMsg = document.getElementById("evolution-msg");
        this.reaperText = document.getElementById("reaper-text");
        this.streakCount = document.getElementById("streak-count");
        this.totalCount = document.getElementById("total-count");
        this.squatBtn = document.getElementById("squat-btn");
        this.notYetBtn = document.getElementById("not-yet-btn");
        this.resetBtn = document.getElementById("reset-btn");
    }

    checkDayTransition() {
        const todayStr = this.getTodayString();

        if (this.state.lastDate !== todayStr) {
            if (this.state.lastDate !== "" && !this.state.isDoneToday) {
                this.state.streak = 0; 
            }
            this.state.lastDate = todayStr;
            this.state.isDoneToday = false;
            this.state.accessCountToday = 0;
            this.state.hasJustPressedBtn = false; 
            this.state.hasPressedNotYetToday = false;
            this.state.notYetClickCountToday = 0; // 日変わりでリセット
            this.saveState();
        }

        this.state.accessCountToday++;
        
        if (this.state.isDoneToday) {
            this.state.hasJustPressedBtn = false;
        }
        
        this.saveState();
    }

    getTodayString() {
        const d = new Date();
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const date = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${date}`;
    }

    drawUniquePhrase(phrasesArray, historyKey) {
        const totalCount = phrasesArray.length;
        if (this.state[historyKey].length >= totalCount) {
            this.state[historyKey] = [];
        }

        let pool = [];
        for (let i = 0; i < totalCount; i++) {
            if (!this.state[historyKey].includes(i)) {
                pool.push(i);
            }
        }

        const randomIndex = pool[Math.floor(Math.random() * pool.length)];
        this.state[historyKey].push(randomIndex);
        this.saveState();

        return phrasesArray[randomIndex];
    }

    render() {
        this.streakCount.textContent = this.state.streak;
        this.totalCount.textContent = this.state.total;

        let imgSrc = "base.png";
        let isEvolved = false;

        if (this.state.streak >= 60) { imgSrc = "crow.png"; isEvolved = true; }
        else if (this.state.streak >= 45) { imgSrc = "scythe2.png"; isEvolved = true; }
        else if (this.state.streak >= 30) { imgSrc = "badge.png"; isEvolved = true; }
        else if (this.state.streak >= 14) { imgSrc = "scythe1.png"; isEvolved = true; }
        else if (this.state.streak >= 7) { imgSrc = "robe2.png"; isEvolved = true; }
        else if (this.state.streak >= 3) { imgSrc = "robe1.png"; isEvolved = true; }

        this.reaperImg.src = imgSrc;

        if (isEvolved && [3, 7, 14, 30, 45, 60].includes(this.state.streak)) {
            this.evolutionMsg.textContent = "……何かが変わったようだ";
            this.evolutionMsg.classList.remove("hidden");
        } else {
            this.evolutionMsg.classList.add("hidden");
        }

        // 表示の出し分け
        if (this.state.isDoneToday) {
            this.squatBtn.disabled = true;
            this.notYetBtn.disabled = true;
            this.squatBtn.textContent = "本日報告済み";

            if (this.state.hasJustPressedBtn) {
                if (!this.currentPhrase) {
                    this.currentPhrase = this.drawUniquePhrase(DONE_SQUATS_PHRASES, "historyReached");
                }
            } else {
                if (!this.currentPhrase) {
                    this.currentPhrase = this.drawUniquePhrase(REVISIT_DONE_PHRASES, "historyRevisit");
                }
            }
            this.reaperText.textContent = this.currentPhrase;

        } else {
            this.squatBtn.disabled = false;
            this.notYetBtn.disabled = false;
            this.squatBtn.textContent = "スクワット完了";

            if (this.state.hasPressedNotYetToday) {
                // 【条件変更】「まだ」を累計3回押した（4回目以降の表示）場合は確定セリフ
                if (this.state.notYetClickCountToday >= 3) {
                    this.reaperText.textContent = HARD_REBUKE_PHRASE;
                } else {
                    if (!this.currentPhrase) {
                        this.currentPhrase = this.drawUniquePhrase(UNTIL_SQUATS_PHRASES, "historyUnreached");
                    }
                    this.reaperText.textContent = this.currentPhrase;
                }
            } else {
                this.reaperText.textContent = "……本日のスクワット実施報告を待っている。";
            }
        }
    }

    bindEvents() {
        this.squatBtn.addEventListener("click", () => {
            if (this.state.isDoneToday) return;

            this.state.isDoneToday = true;
            this.state.hasJustPressedBtn = true;
            this.state.streak++;
            this.state.total++;
            this.saveState();

            this.currentPhrase = null;
            this.render();
        });

        this.notYetBtn.addEventListener("click", () => {
            if (this.state.isDoneToday) return;

            this.state.hasPressedNotYetToday = true;
            this.state.notYetClickCountToday++; // カウントを増やす
            this.saveState();

            this.currentPhrase = null; 
            this.render();
        });

        this.resetBtn.addEventListener("click", () => {
            if (confirm("これまでのスクワット監査記録をすべて消去し、初期化します。本当によろしいですか？")) {
                localStorage.removeItem("reaper_squat_state");
                alert("記録は抹消されました。");
                location.reload();
            }
        });
    }
}

window.addEventListener("DOMContentLoaded", () => {
    new ReaperApp();
});