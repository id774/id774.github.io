(function () {
  "use strict";

  function isJapaneseTag(tag) {
    if (typeof tag !== "string" || tag.length === 0) {
      return false;
    }
    var lower = tag.toLowerCase();
    return lower === "ja" || lower.indexOf("ja-") === 0;
  }

  function getPreferredLanguage() {
    if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
      return navigator.languages[0];
    }
    if (typeof navigator.language === "string") {
      return navigator.language;
    }
    return null;
  }

  function isFromJapaneseTopPage() {
    var referrer = document.referrer;
    if (!referrer) {
      return false;
    }
    var referrerUrl;
    try {
      referrerUrl = new URL(referrer);
    } catch (e) {
      return false;
    }
    return referrerUrl.origin === location.origin &&
      referrerUrl.pathname === "/index-ja.html";
  }

  if (!isJapaneseTag(getPreferredLanguage())) {
    return;
  }
  if (isFromJapaneseTopPage()) {
    return;
  }
  location.replace("/index-ja.html" + location.search + location.hash);
})();
