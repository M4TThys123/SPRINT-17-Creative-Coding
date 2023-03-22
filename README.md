# Intro to Vue 2

---

### `CLI`

### `v-bind:`

### `v-for`

### `v-on` (`:click`)

### `v-if` & `v-else`

---

## 01. Vue Instance

### `CLI`

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>
```

### `index.html`

```html
<!DOCTYPE html>
<html lang="nl">
<head>
    <title>My Website</title>
</head>
<body>
	<div id="app">
		<h1>{{ product }}</h1>
	</div>

	<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>
	<script src="main.js"></script>
</body>
</html>
```

### `main.js`

```jsx
var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
    }
})
```

## 02. Attribute Binding

### `v-bind:`

derective: Maakt een bond tussen de date en het atribute waar je de data bij wilt

```html
<img v-bind:src="image">
```

![Screenshot 2023-02-21 at 14.14.15.png](Intro%20to%20Vue%202%200a421d045b6c4273b799b91daf329a10/Screenshot_2023-02-21_at_14.14.15.png)

**Shortcut**

```html
<img :src="image">
```

![Screenshot 2023-02-21 at 14.16.30.png](Intro%20to%20Vue%202%200a421d045b6c4273b799b91daf329a10/Screenshot_2023-02-21_at_14.16.30.png)

## 03. Conditional Rendering

### `v-if` & `v-else`

```html
<p v-if="inStock">In Stock</p>
<p v-else>Out of stock</p>
```

 `main.js`

```jsx
data: {
	product: 'Socks',
	inStock: **true**
}
```

![Screenshot 2023-02-21 at 14.54.43.png](Intro%20to%20Vue%202%200a421d045b6c4273b799b91daf329a10/Screenshot_2023-02-21_at_14.54.43.png)

### `v-show`

```html
<p v-show="inventory = 0">{{ description }}</p>
```

## 04. List Rendering

### `v-for`

![Screenshot 2023-02-21 at 16.31.27.png](Intro%20to%20Vue%202%200a421d045b6c4273b799b91daf329a10/Screenshot_2023-02-21_at_16.31.27.png)

## 05. event-handling

### `v-on`

`v-on:click="cart += 1"`

### `Function` outside *<template>*

```jsx
const addToCart = () => cart.value += 1 
```

```html
<template>
	<button v-on:click="addToCart">
</template>
```

## 06. class-&-style-binding

## 07. vue-computed-properties

## 08. components

## 09. communicating-events

## 10. forms

## 11. tabs
