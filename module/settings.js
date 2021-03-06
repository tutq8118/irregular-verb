const settings = async () => {
  let settings = {};

  if (localStorage.ACADEMIC_WORDLIST_SETTINGS) {
    settings = JSON.parse(localStorage.ACADEMIC_WORDLIST_SETTINGS);
  }

  const sublistSelected = parseInt(settings.sublist) > 0 ? parseInt(settings.sublist) : 0;
  const colorSelected = settings.color ? settings.color : "#2dbe60";
  document.querySelector("#sublist-selector").getElementsByTagName('option')[sublistSelected].selected = 'selected'
  document.querySelector("#color-selector").value = colorSelected;

  document.querySelector("#settings-form").addEventListener('submit', function (e) {
    e.preventDefault();
    settings.sublist = document.querySelector("#sublist-selector").value;
    settings.color = document.querySelector("#color-selector").value;
    localStorage.ACADEMIC_WORDLIST_SETTINGS = JSON.stringify(settings);
  });

  document.querySelector("#settings-form").addEventListener('reset', function (e) {
    settings.sublist = 0;
    settings.color = "#2dbe60";
    localStorage.ACADEMIC_WORDLIST_SETTINGS = JSON.stringify(settings);
  });

};

export default settings;