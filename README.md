# [Стиль написания кода](https://github.com/airbnb/javascript/tree/es5-deprecated/es5 "Airbnb JavaScript Style Guide() {") - внимательно читаем !!!

## Отличия от представленного выше стандарта:
- 4 пробела, вместо 2-ух
```javascript
//bad
function () {
 var name;
}
```
```javascript
//good
function () {
  var name;
}
```

- перед **return** всегда ставим перенос строки, если return не единственная конструкция в блоке
```javascript
//...

return true;
```
```javascript
if (true) {
    return false;
}
```
- используем references to this
```javascript
//good
function () {
  var self = this;
  return function () {
    console.log(self);
  };
}
```
а не bind
```javascript
//bad
function () {
  return function () {
    console.log(this);
  }.bind(this);
}
```


> ### "Споры по поводу стилей бессмысленны. У вас должно быть руководство по стилю и вы должны следовать ему."
>_Rebecca_ _Murphey_

&nbsp;

> ### "Чтобы быть хорошим управляющим проекта, нужно понимать, что писать код для себя это Плохая Идея. Если тысячи людей используют ваш код, то пишите свой код максимально понятно, а не на собственное усмотрение."
>_Idan_ _Gazit_

&nbsp;

> ###  "Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живёте"
>Джон Ф. Вудс