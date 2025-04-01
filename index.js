function fetchUserInfo(userId) {
    // リクエストを作成する
    const request = new XMLHttpRequest();
    request.open("GET", `https://api.github.com/users/${encodeURIComponent(userId)}`);
    request.addEventListener("load", () => {
        // リクエストが成功したかを判定する
        // Fetch APIのresponse.okと同等の意味
        if (request.status >= 200 && request.status < 300) {
            // レスポンス文字列をJSONオブジェクトにパースする
            const userInfo = JSON.parse(request.responseText);
            console.log(userInfo);
        } else {
            console.error("エラーレスポンス", request.statusText);
        }
    });
    request.addEventListener("error", () => {
        console.error("ネットワークエラー");
    });
    // リクエストを送信する
    request.send();
}