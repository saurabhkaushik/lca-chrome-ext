document.addEventListener("DOMContentLoaded", function() {
    var responseObj = JSON.parse (sessionStorage.getItem("response"));
    var response = responseObj["highlight_response"];
    console.log(responseObj);

    let markClass = "";
    var newHtml = "";
    newHtml += "<b>Title:</b> " + responseObj["title"] + "<br>";
    if (responseObj["score_report_json"] !== undefined)
        newHtml += "<b>Risk Score :</b> " + responseObj["score_report_json"].score_report_risk_score + " %<br>"; 

    for (var hlObj in response) {
        console.log(hlObj);
        if (response[hlObj].flag === "High") {
            markClass = "mark-high";
        } else if (response[hlObj].flag === "Medium") {
            markClass = "mark-medium";
        } else if (response[hlObj].flag === "Low") {
            markClass = "mark-low";
        } else {
            markClass = "mark-na";
        }
        const tooltip = `Label :${response[hlObj].label}; Risk : ${response[hlObj].flag}; Presence Score : ${response[hlObj].p_score}; Context Score : ${response[hlObj].c_score};`;

        newHtml += "<div class=\'" + markClass + "\' key=\'" + hlObj + "\' > <div class=\"tooltip\">" + response[hlObj].c_sentence + "<span class=\"tooltiptext\">" + tooltip + "</span></div></div>";
    }
    console.log(newHtml);

    var element = document.getElementById("response_text");
    element.innerHTML = newHtml;
});