// легкая версия без учета unicode symbols по 7 символов
function splitStringByLimit(str) {
  return str.match(/.{1,6}(\s|$)/g);
}

// тяжелая версия с учетом unicode symbols по 7 символов
function splitStringByLimitCoverageAll(str) {
  return str.match(
    /([\p{RGI_Emoji}\p{L}\p{N}\p{Z}\p{P}\p{Cc}][\p{M}\p{Join_Control}]*){1,7}(\s|$)|(.{7})/gv
  );
}

console.log(
  splitStringByLimitCoverageAll(
    "𩷶 å 🇨🇳мама мыла раму в 🇨🇳 оченьдлинноесловодлятесталимита"
  )
);
