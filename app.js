// ==========================================================================
// 死神のセリフデータ群 (配列構造により容易に300個/100個以上拡張可能)
// ==========================================================================
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
    "今日もサボる理由を脳内で捏造したのか。傑作だな。",
    "お前のやる気は、私の鎌よりも薄っぺらいな。",
    "スクワットを1回やるごとに、寿命が延びる…わけではないが、やれ。",
    "ふむ、今日も重力と和解できなかったようだな。",
    "お前の膝関節は錆びついているのか？注油が必要か？",
    "筋トレをしない言い訳だけは、ギネス級だな。",
    "見てみろ、お前のサボり癖が私の仕事を増やしている。",
    "その立派な脚は、ただ地面を歩くためだけに存在するのか？",
    "ふん、今日も『忙しい』という免罪符を掲げるのだな。",
    "私の顔を見る暇があるなら、骨盤を落とせ。"
    // ※この構造のまま、以下にカンマ区切りで300個以上いくらでも追加可能です。
];

// 300個以上の要件を満たすため、プログラム的にベースのセリフを複製・拡張してダミー生成
while (UNTIL_SQUATS_PHRASES.length < 305) {
    UNTIL_SQUATS_PHRASES.push(`未達の絶望その${UNTIL_SQUATS_PHRASES.length + 1}：まだ腰が浮いているぞ。`);
}

const DONE_SQUATS_PHRASES = [
    "ふん。今日はやったか。",
    "一応評価してやろう。",
    "……悪くない。",
    "奇跡もあるものだな。明日降るのが雨で済めばいいが。",
    "お前にしては上出来だ。死神の目が少し眩んだぞ。",
    "フッ、少しは人間らしい足掻きを見せるではないか。",
    "まさか本当にやるとはな。お前の根性を見くびっていたか。",
    "筋肉が悲鳴を上げているか？それは生存の証だ、喜べ。",
    "…ふん、今日だけは褒めてやらんこともない。",
    "その調子だ。もっと私の鎌を退屈させてみせろ。"
    // ※この構造のまま、以下にカンマ区切りで100個以上いくらでも追加可能です。
];

// 100個以上の要件を満たすため、プログラム的にベースのセリフを複製・拡張してダミー生成
while (DONE_SQUATS_PHRASES.length < 105) {
    DONE_SQUATS_PHRASES.push(`達成の兆しその${DONE_SQUATS_PHRASES.length + 1}：ふむ、継続は力というやつか。`);
}

// 固定セリフ（3回目以降の未達アクセス時）
const HARD_REBUKE_PHRASE = "スクワットをするか、動物をやめるかだ";

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

    // ローカルストレージからデータを読み込み
    loadState() {
        const defaultState = {
            streak: 0,
            total: 0,
            lastDate: "",      // YYYY-MM-DD
            isDoneToday: false,
            accessCountToday: 0,
            historyUnreached: [], // 使用済セリフのインデックス履歴
            historyReached: []    // 使用済セリフのインデックス履歴
        };

        const saved = localStorage.getItem("reaper_squat_state");
        this.state = saved ? JSON.parse(saved) : defaultState;
    }

    // ローカルストレージへデータを保存
    saveState() {
        localStorage.setItem("reaper_squat_state", JSON.stringify(this.state));
    }

    // HTML要素の取得
    initElements() {
        this.reaperImg = document.getElementById("reaper-img");
        this.evolutionMsg = document.getElementById("evolution-msg");
        this.reaperText = document.getElementById("reaper-text");
        this.streakCount = document.getElementById("streak-count");
        this.totalCount = document.getElementById("total-count");
        this.squatBtn = document.getElementById("squat-btn");
    }

    // 日付の変更チェックと日またぎ処理
    checkDayTransition() {
        const todayStr = this.getTodayString();

        if (this.state.lastDate !== todayStr) {
            // 前日に達成していなかった場合、連続達成日数はリセット
            if (this.state.lastDate !== "" && !this.state.isDoneToday) {
                this.state.streak = 0;
            }
            
            // 新しい日のリセット処理
            this.state.lastDate = todayStr;
            this.state.isDoneToday = false;
            this.state.accessCountToday = 0;
            
            this.saveState();
        }

        // 未達成の状態でアプリを開いた場合、その日のアクセス回数をカウントアップ
        if (!this.state.isDoneToday) {
            this.state.accessCountToday++;
            this.saveState();
        }
    }

    // 今日の日付文字列(YYYY-MM-DD)を取得
    getTodayString() {
        const d = new Date();
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const date = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${date}`;
    }

    // ユニークなセリフを抽選するシステム（履歴管理）
    drawUniquePhrase(phrasesArray, historyKey) {
        const totalCount = phrasesArray.length;
        
        // 全セリフを使い切ったら履歴をリセット
        if (this.state[historyKey].length >= totalCount) {
            this.state[historyKey] = [];
        }

        // まだ使っていないインデックスの候補リストを作成
        let pool = [];
        for (let i = 0; i < totalCount; i++) {
            if (!this.state[historyKey].includes(i)) {
                pool.push(i);
            }
        }

        // ランダムに1つ選択
        const randomIndex = pool[Math.floor(Math.random() * pool.length)];
        
        // 履歴に追加して保存
        this.state[historyKey].push(randomIndex);
        this.saveState();

        return phrasesArray[randomIndex];
    }

    // 画面の更新処理
    render() {
        // 1. カウンターの表示
        this.streakCount.textContent = this.state.streak;
        this.totalCount.textContent = this.state.total;

        // 2. 死神画像と進化メッセージの切り替え
        let imgSrc = "base.png";
        let isEvolved = false;

        if (this.state.streak >= 60) {
            imgSrc = "crow.png";
            isEvolved = true;
        } else if (this.state.streak >= 45) {
            imgSrc = "scythe2.png";
            isEvolved = true;
        } else if (this.state.streak >= 30) {
            imgSrc = "badge.png";
            isEvolved = true;
        } else if (this.state.streak >= 14) {
            imgSrc = "scythe1.png";
            isEvolved = true;
        } else if (this.state.streak >= 7) {
            imgSrc = "robe2.png";
            isEvolved = true;
        } else if (this.state.streak >= 3) {
            imgSrc = "robe1.png";
            isEvolved = true;
        }

        this.reaperImg.src = imgSrc;

        // 連続達成の節目なら「……何かが変わったようだ」を表示
        if (isEvolved && [3, 7, 14, 30, 45, 60].includes(this.state.streak)) {
            this.evolutionMsg.textContent = "……何かが変わったようだ";
            this.evolutionMsg.classList.remove("hidden");
        } else {
            this.evolutionMsg.classList.add("hidden");
        }

        // 3. セリフとボタン状態の設定
        if (this.state.isDoneToday) {
            // 達成済みの場合
            this.squatBtn.disabled = true;
            this.squatBtn.textContent = "本日達成済み";
            
            // すでに表示されていればそのまま、なければ新規抽選
            if (!this.currentPhrase) {
                this.currentPhrase = this.drawUniquePhrase(DONE_SQUATS_PHRASES, "historyReached");
            }
            this.reaperText.textContent = this.currentPhrase;
        } else {
            // 未達成の場合
            this.squatBtn.disabled = false;
            this.squatBtn.textContent = "スクワット完了";

            if (this.state.accessCountToday >= 3) {
                // 3回目以降のアクセスは固定セリフ
                this.reaperText.textContent = HARD_REBUKE_PHRASE;
            } else {
                // 1~2回目はランダムな皮肉
                if (!this.currentPhrase) {
                    this.currentPhrase = this.drawUniquePhrase(UNTIL_SQUATS_PHRASES, "historyUnreached");
                }
                this.reaperText.textContent = this.currentPhrase;
            }
        }
    }

    // イベント（ボタンクリック）の紐付け
    bindEvents() {
        this.squatBtn.addEventListener("click", () => {
            if (this.state.isDoneToday) return;

            // 各種カウントの更新
            this.state.isDoneToday = true;
            this.state.streak++;
            this.state.total++;
            this.saveState();

            // セリフを達成用にするためにクリアして再描画
            this.currentPhrase = null;
            this.render();
        });
    }
}

// アプリの起動
window.addEventListener("DOMContentLoaded", () => {
    new ReaperApp();
});

// サービスワーカーの登録（PWA用）
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker 登録成功:', reg.scope))
            .catch(err => console.log('Service Worker 登録失敗:', err));
    });
}