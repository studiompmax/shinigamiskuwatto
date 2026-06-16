// ==========================================================================
// 死神のセリフデータ群
// ==========================================================================

// 1. 未達セリフ
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
    "おい、脂肪のクッションの上に根を張るつもりか？"
];
while (UNTIL_SQUATS_PHRASES.length < 305) {
    UNTIL_SQUATS_PHRASES.push(`未達の監視ログ第${UNTIL_SQUATS_PHRASES.length + 1}号：直立不動のまま人生を終える気か？`);
}

// 2. 達成の瞬間セリフ
const DONE_SQUATS_PHRASES = [
    "ふん。今日はやったか。",
    "一応評価してやろう。",
    "……悪くない。",
    "奇跡もあるものだな。明日降るのが雨で済めばいいが。",
    "お前にしては上出来だ。死神の目が少し眩んだぞ。"
];
while (DONE_SQUATS_PHRASES.length < 105) {
    DONE_SQUATS_PHRASES.push(`達成承認記録その${DONE_SQUATS_PHRASES.length + 1}：ほう、まだ息が続いているな。`);
}

// 3. 達成後に再訪した時のセリフ (10種類)
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

// 4. 3回目以降のアクセス固定セリフ
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

    loadState() {
        const defaultState = {
            streak: 0,
            total: 0,
            lastDate: "",
            isDoneToday: false,
            accessCountToday: 0,
            hasJustPressedBtn: false,
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

        if (this.state.isDoneToday) {
            this.squatBtn.disabled = true;
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
            this.squatBtn.textContent = "スクワット完了";

            if (this.state.accessCountToday >= 3) {
                this.reaperText.textContent = HARD_REBUKE_PHRASE;
            } else {
                if (!this.currentPhrase) {
                    this.currentPhrase = this.drawUniquePhrase(UNTIL_SQUATS_PHRASES, "historyUnreached");
                }
                this.reaperText.textContent = this.currentPhrase;
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