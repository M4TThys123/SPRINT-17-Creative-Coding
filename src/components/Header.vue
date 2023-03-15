<template>
  <header class="header has-background">
    <div class="header__inner">
      <nav class="nav nav--top">
        <a href="/" class="nav__logo">
          <img :src="logoSrc" alt="" style="width: 108px; max-height: 32px">
        </a>

        <ul class="nav__list" id="nav__list">
          <li class="nav__item inter "><a href="/home">Home</a></li>
          <li class="nav__item inter has-children">
            <a href="/diensten">Diensten</a>
            <ul class="dropdown-menu">
              <li><a href="#">CV-Installatie</a></li>
              <li><a href="#">Onderhoud</a></li>
              <li><a href="#">Installatiewerk</a></li>
              <li><a href="#">Woningventalatie</a></li>
            </ul>
          </li>
          <li><a href="/partners">Partners</a></li>
          <li><a href="/over">Over ons</a></li>
          <li>
            <button @click="belMatthijs">Bellen</button>
          </li>
        </ul>

        <div class="hamburger" id="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavigationHeader",
  data() {
    return {
      logoSrc: require('../assets/images/nav_light.png')
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  z-index: 10;
  width: 100%;
  padding: 1.5rem 1.875rem 1rem;
  transition: background-color .4s ease-out, color .4s ease-out, transform .4s ease-out;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px;
}

.logo a {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav__list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 50%;
}

.nav__list li a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  width: 30px;
  height: 3px;
  background-color: #fff;
  margin: 5px;
  transition: 0.4s;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #333;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

@media only screen and (max-width: 768px) {
  .nav__list {
    position: absolute;
    right: 0px;
    height: 92vh;
    top: 8vh;
    background-color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }

  .nav__list li {
    opacity: 0;
  }

  .hamburger {
    display: block;
  }

  .nav-active {
    transform: translateX(0%);
  }

  .nav__list li {
    opacity: 1;
    transition: opacity 0.5s ease-in;
  }
}

</style>