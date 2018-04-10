import {OrderedMap, Map} from 'immutable';

export function arrToMap(arr, DataRecord = Map) {
  return arr.reduce((acc, item) =>
    acc.set(item.id, new DataRecord(item)),
  new OrderedMap({})
  );
}

export function mapToArr(obj) {
  return obj.valueSeq().toArray();
}

export function getUserLang() {
  let lang = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
  if(lang) {
    return lang.toLowerCase().split(/[_-]+/)[0]; // take en from en-US or en_US
  } else {
    return 'en'; // default lang
  }
}

// +74959742274 = +7 (495) 974-22-74
export function formatPhoneNumber(number) {
  return number.replace(/(\+?\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5');
}
