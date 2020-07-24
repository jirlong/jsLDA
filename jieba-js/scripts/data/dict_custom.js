_custom_dict = [
	["漫畫", 9999999999, "n"],
    ["台灣", 9999999999, "n"],
    ["移工", 9999999999, "n"]
];


// 引用設定檔案，以下不用變更
if (typeof(define) === "function") {
    define(function (require) {
        return _custom_dict;
    });
}
else {
    module.exports = _custom_dict;
}