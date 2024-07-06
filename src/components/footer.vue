<template>
    <footer>
    <div class="footer__container">
        <div class="footer__container__content">
            <div class="footer__left">
                <router-link to="/main" ><img src="../img/Logo_hedder.svg" class="footer_container__svg" alt=""></router-link>
            </div>
            <div class="footer__middle">
                <ul class="footer_container__ul">
                    <li class="footer_container_ul__li footer_container_ul_li__first">
                        <b>Навигация</b>
                    </li>
                    <li class="footer_container_ul__li">
                        <a class="footer_container_ul_li__a" href="">Новости</a>
                    </li>
                    <li class="footer_container_ul__li">
                        <a class="footer_container_ul_li__a" href="">Турниры</a>
                    </li>
                    <li class="footer_container_ul__li">
                        <router-link to="/raiting" class="footer_container_ul_li__a" >Рейтинг</router-link>
                    </li>
                    <li class="footer_container_ul__li">
                        <a class="footer_container_ul_li__a" href="">Галерея</a>
                    </li>
                    <li class="footer_container_ul__li">
                        <a class="footer_container_ul_li__a" href="">Статистика</a>
                    </li>
                </ul>

                <ul class="footer_container__ul">
                    <li class="foter_container_ul__li footer_container_ul_li__first">
                        <b>Контакты</b>
                    </li>
                    <li class="foter_container_ul__li">
                        Тел:  <a class="footer_container_ul_li__a" href="">+7 (123) 123-23-12</a>
                    </li>
                    <li class="foter_container_ul__li">
                        Почта:  <a class="footer_container_ul_li__a" href="">pochta@gmail.com</a>
                    </li>
                    <li class="foter_container_ul__li">
                        Адрес: <a class="footer_container_ul_li__a" href=""> ул. Пушкина, д. 52</a>
                    </li>
                </ul>
            </div>
            <div class="footer__right">
    <!-- Social media icons -->
    <div class="footer_container__svetlogorsk" @mouseover="changeImage('footer_image', svetlHover)" @mouseout="restoreImage('footer_image', svetl)">
      <a href="" class="footer_container__a"></a>
      <img :src="footerImage" alt="" id="footer_image">
    </div>
    <div class="footer_container__kitis" @mouseover="changeImage('footer_imagee', kitiHover)" @mouseout="restoreImage('footer_imagee', kiti)">
      <a href="" class="footer_container__a"></a>
      <img :src="footerImagee" alt="" id="footer_imagee">
    </div>
  </div>
        </div>
        <div class="footer_palka"></div>
        <div class="footer_text">Что-то тут точно должно быть, политика конфиденциальности, к примеру</div>
    </div>
</footer>
</template>
<script>
export default {
  data() {
    return {
      svetl: require('../img/svetl.svg'),
      svetlHover: require('../img/Svetl_hover.svg'),
      kiti: require('../img/Kitis.svg'),
      kitiHover: require('../img/Kitis_hover10.svg'),
      footerImage: require('../img/svetl.svg'),
      footerImagee: require('../img/Kitis.svg')
    };
  },
  methods: {
    changeImage(id, src) {
      document.getElementById(id).src = src;
    },
    restoreImage(id, src) {
      document.getElementById(id).src = src;
    }
  }
};
</script>
<style scoped>
*{
    transition: 0.3s ease;
    font-family: Gilroy;
    transform: 0.3s ease;
}
body {
    background-color: #151319;
    font-family: 'Gilroy', sans-serif;
  }


 /* шапка  */

  .nav{
    width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}
.nav-link .nav_list_item__link {
    color: #EAECEC;
}
.nav_list_item__link {
    border: none;
    text-decoration: none;
    color: #EAECEC;
    font-family: Gilroy;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
}

.bodyq {
    height: 2133px;
    z-index: 0;
}

.nav_list__item {
    display: flex;
    align-items: center;
    height: 83px;
    margin-right: 70px;
    transition: border-bottom 3s ease;
}
.nav_list__item:hover .nav_list_item__link {
    color: #E14344;
  
}
.nav_list__item:hover .nav_list_item__link:hover {
    color: #E14344;
}
.nav_list__item:hover .nav_list_item__link {
    color: #E14344;
  
    background-color: #2a2a2a; /* Цвет фона при наведении */
}
.nav_list__item:hover {
    color: #E14344; 
    border-bottom: 2px solid #E14344;
}

header {
    width: 100%;
    height: 85px;
    align-items: center;
    background-color: #1E1C24;
    backdrop-filter: blur(17.5px);
    padding-left: 70px;
    padding-right: 70px;
    display: flex;
    justify-content: space-between;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

.search-bar {
    height: 37px;
    display: flex;
    width: 352px;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    background: #151319;
    margin-left: 100px;
    margin-right: 40px;
}

.search-bar input {
    width: 80%;
    background: none;
    border: none;
    color: #EAECEC;
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 10px;
}

.search-bar img {
    margin-top: 3px;
    margin-left: 20px;
    width: 20px;
    height: 20px;
}

.button {
    color: #EAECEC;
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    z-index: 100;
    position: relative;
    text-align: center;
    border-radius: 10px;
    background: #FD3D48;
    display: inline-flex;
    width: 85px;
    height: 37px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;
    outline: none;
    transition: background-color 0.3s ease;
}

.button:hover {
    background: #FF525C;
}
.navbar-toggler-iconn{
    height: 30px;
    width: 30px;
    background-image: url(../img/navbar_togler.svg);
}
.nav-link{
    color: #EAECEC;
}
.button-register {
    border: none;
    outline: none;
    height: 37px;
    list-style: none;
    color: #151319;
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    z-index: 100;
    position: relative;
    text-align: center;
    border-radius: 10px;
    background: #EAECEC;
    display: inline-flex;
    padding: 0px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-left: 5px;
    transition: background-color 0.3s ease;
}

.button-register:hover {
    background: #B2B5BC;
}

.palka {
    background-color: #E14344;
    width: 120px;
    height: 2px;
    position: absolute;
    top: 135px;
    left: -126px;
    transition: transform 0.3s ease;
}

.nav_list_item__link:hover{
    color: #E14344;
    }
.nav_list{
    display: flex;
}
/* Стилизация полосы прокрутки */
::-webkit-scrollbar {
    width: 5px;
    background: #151319;
}

/* Стилизация ползунка */
::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
    background: #EAECEC;
}
.head {
    width: 100%;
    background-color: #1E1C24;
    backdrop-filter: blur(17.5px);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}
a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}
/* ... (остальные стили остаются без изменений) ... */


.head {
    
    width: 100%;
    background-color: #1E1C24;
    backdrop-filter: blur(17.5px);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding-left: 70px;
    padding-right: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


#loginBtn{
    color: #EAECEC;
}
.flexx{
    display: flex ;
}
/* Общие стили для выпадающего меню */
.dropdown {
    position: relative;
    display: inline-block;
}

.dropbtn {
    background-color: #1E1C24;
    color: #EAECEC;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #1E1C24;
    min-width: 160px;
    z-index: 1;
    border-radius: 5px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.dropdown-content a {
    color: #EAECEC;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #EAECEC;
    color: #1E1C24;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: #EAECEC;
    color: #1E1C24;
}
 /* Подывал */
footer{
    margin-top: 200px;
  }
  .footer__container {
    border-bottom: none;
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
    border-top: 2px solid var(--default-main-logo, #FD3D48);
    background: var(--default-main, #1E1C24);
    backdrop-filter: blur(17.5px);
    padding: 20px 0;
  }
  
  .footer__container__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0 50px;
  }
  
  .footer__left,
  .footer__middle,
  .footer__right {
    flex: 1;
    margin-top: 80px;
  }
  .footer__middle{
    display: flex;
    margin-right: 148px;
  }
  .footer_container__ul {
    margin-right: 148px;
    margin: 0;
    padding: 0;
    list-style-type: none;
    margin-bottom: 20px;
  }
  
  .footer_container__ul li {
    color: #EAECEC;
    margin-bottom: 15px;
  }
  
  .footer_container_ul_li__first {
    font-weight: bold;
  }
  
  .footer_container_ul_li__a {
    text-decoration: none;
    color: #EAECEC;
  }
  
  .footer_container_ul_li__a:hover {
    color: #E14344;
  }
  .footer_container__ul:first-child{
    margin-right: 215px;
  }
  .footer_container__svetlogorsk{
    margin-bottom: 17px;
  }
  .footer_container__svg{
    margin-left: 285px;
  }
  .footer_text{
    display: flex;
    justify-content: center;
    align-items: end;
    height: 38px;
    border-top:2px solid #272A31 ;
    color: #888;
    margin-left: 250px;
    margin-right: 250px;
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  }
  /* Медиа-запросы для адаптивности */
  @media (max-width: 768px) {
    .footer_text{
      margin-left: 0;
      margin-right: 0;
    }
    .footer_container__svg{
      margin-left:0;
    }
    .footer__container{
      margin-top: 540px;
    }
    .footer{
      margin-top: 540px;
    }
    .footer__middle{
      flex-direction: column;
    }
    .footer__container__content {
        flex-direction: column;
        align-items: center;
    }
  
    .footer__container__content > div {
        margin-bottom: 20px;
    }
  }
  @media (min-width: 768px) {
    
      .navbar-expand-md .navbar-collapse {
          justify-content: space-evenly;
          display: flex !important;
          flex-basis: auto;
      }
  }
  @media (min-width: 576px) { /* Стили для экранов шире 576px */
    .footer{
      margin-top: 540px;
    }
      header {
          min-height: 85px;
          height: auto; /* Автоматическая высота для адаптивности */
      }
      .search-bar {
          margin-left: -5px; /* Уменьшаем отступ для лучшей адаптивности */
      }
   
      .ms-3{
          margin-left:0rem!important ;
      }
  }
  @media (max-width:768px) {
    .footer{
      margin-top: 540px;
    }
      .ms-3{
          margin-left: 0rem !important;
      }
      .nav_list {
          flex-direction: column;
          align-items: flex-start;
          margin-top: 20px;
          margin-left: 0;
      }
      .nav_list__item {
          margin-right: 0;
          margin-bottom: 10px;
      }
      .search-bar {
          margin-left: 0;
          margin-top: 20px;
      }
      .button_container {
          margin-top: 20px;
      }
      .ms-3{
          margin-left:0rem!important ;
      }
      .flexx{
           flex-direction: column;
      }
      header {
          height: auto; /* Автоматическая высота для адаптивности */
      }
  }
  @media (max-width: 575.98px) { /* Стили для экранов меньше 576px (мобильные устройства) */ 
       .flexx{
           flex-direction: column;
      }
        header {
          height: auto; /* Автоматическая высота для адаптивности */
      }
      header {
          flex-direction: column;
          align-items: flex-start;
      }
      .nav_list {
          flex-direction: column;
          align-items: flex-start;
          margin-top: 20px;
          margin-left: 0;
      }
      .nav_list__item {
          margin-right: 0;
          margin-bottom: 10px;
      }
      .search-bar {
          margin-left: 0;
          margin-top: 20px;
      }
      .button_container {
          margin-top: 20px;
      }
  }
</style>