<template>
 
   <router-view/>
  </template>
  
  <script>
    import Hadder from '@/components/hadder.vue'; 
    import Foter from '@/components/footer.vue'; 
  
  
  
  export default {
  name: 'App',
    components: { 
      Hadder,
      Foter,  
      
    },
    data() {
      return {
        streams: [
          { url: require('@/img/strim.png') },
        ],
        newsItems: [
          { image: require('./img/news.png'),title: 'Стартует KINGDOM Season 4 Counter-Strike 2',date: '21.03.2024',text: 'Также как высококачественный прототип будущего проекта требует определения и уточнения направлений прогрессивного развития. Но постоянный количественный рост и сфера нашей активности в значительной степени обусловливает важность анализа существующих паттернов поведения. Наше дело не та...',views: 296,likes: 31},
          { image: require('./img/news.png'),title: 'Стартует KINGDOM Season 4 Counter-Strike 2',date: '21.03.2024',text: 'Также как высококачественный прототип будущего проекта требует определения и уточнения направлений прогрессивного развития. Но постоянный количественный рост и сфера нашей активности в значительной степени обусловливает важность анализа существующих паттернов поведения. Наше дело не та...',views: 296,likes: 31},
          { image: require('./img/news.png'),title: 'Стартует KINGDOM Season 4 Counter-Strike 2',date: '21.03.2024',text: 'Также как высококачественный прототип будущего проекта требует определения и уточнения направлений прогрессивного развития. Но постоянный количественный рост и сфера нашей активности в значительной степени обусловливает важность анализа существующих паттернов поведения. Наше дело не та...',views: 296,likes: 31},
          { image: require('./img/news.png'),title: 'Стартует KINGDOM Season 4 Counter-Strike 2',date: '21.03.2024',text: 'Также как высококачественный прототип будущего проекта требует определения и уточнения направлений прогрессивного развития. Но постоянный количественный рост и сфера нашей активности в значительной степени обусловливает важность анализа существующих паттернов поведения. Наше дело не та...',views: 296,likes: 31},
        ],
        tournaments: [
          { name: 'Kingdom Students Season 5', game: 'Counter-Strike 2', date: '21 марта 2024 г.', status: 'Идет' },
          { name: 'Kingdom Students Season 5', game: 'Counter-Strike 2', date: '21 марта 2024 г.', status: 'Идет' },
          { name: 'Kingdom Students Season 5', game: 'Counter-Strike 2', date: '21 марта 2024 г.', status: 'Идет' },
          { name: 'Kingdom Students Season 5', game: 'Counter-Strike 2', date: '21 марта 2024 г.', status: 'Идет' },
          { name: 'Kingdom Students Season 5', game: 'Counter-Strike 2', date: '21 марта 2024 г.', status: 'Идет' },
                                                      
        ],
        upcomingmatches: [
          { LogoOne: require('@/img/Logo_hedder.svg'), pts: 4567, team1: 'EGS AC.', team2: 'EGS AC.', score1: 2, score2: 1, time: '18:00 МСК', date: '21 марта 2024 г.', status: 'Проведен', winner: 1, LogoTwo: require('@/img/Logo_hedder.svg') },
          { LogoOne: require('@/img/Logo_hedder.svg'), pts: 4567, team1: 'EGS AC.', team2: 'EGS AC.', score1: 2, score2: 1, time: '18:00 МСК', date: '21 марта 2024 г.', status: 'Проведен', winner: 1, LogoTwo: require('@/img/Logo_hedder.svg') },
          { LogoOne: require('@/img/Logo_hedder.svg'), pts: 4567, team1: 'EGS AC.', team2: 'EGS AC.', score1: 2, score2: 1, time: '18:00 МСК', date: '21 марта 2024 г.', status: 'Проведен', winner: 1, LogoTwo: require('@/img/Logo_hedder.svg') },
          { LogoOne: require('@/img/Logo_hedder.svg'), pts: 4567, team1: 'EGS AC.', team2: 'EGS AC.', score1: 2, score2: 1, time: '18:00 МСК', date: '21 марта 2024 г.', status: 'Проведен', winner: 1, LogoTwo: require('@/img/Logo_hedder.svg') },
        ],
        matshes: [
          { LogoOne: require('@/img/Logo_hedder.svg'), ptsOne: 4567, team1: 'EGS AC.', team2: 'EGS AC.', time: '18:00 МСК', date: '21 марта 2024 г.', statys: 'Не проведен', ptsTwo: 4567, LogoTwo: require('@/img/Logo_hedder.svg') },
          { LogoOne: require('@/img/Logo_hedder.svg'), ptsOne: 4567, team1: 'EGS AC.', team2: 'EGS AC.', time: '18:00 МСК', date: '21 марта 2024 г.', statys: 'Не проведен', ptsTwo: 4567, LogoTwo: require('@/img/Logo_hedder.svg') },
          { LogoOne: require('@/img/Logo_hedder.svg'), ptsOne: 4567, team1: 'EGS AC.', team2: 'EGS AC.', time: '18:00 МСК', date: '21 марта 2024 г.', statys: 'Не проведен', ptsTwo: 4567, LogoTwo: require('@/img/Logo_hedder.svg') },
          { LogoOne: require('@/img/Logo_hedder.svg'), ptsOne: 4567, team1: 'EGS AC.', team2: 'EGS AC.', time: '18:00 МСК', date: '21 марта 2024 г.', statys: 'Не проведен', ptsTwo: 4567, LogoTwo: require('@/img/Logo_hedder.svg') },
        ],
  
  
        players:[
                    {id:1,top:1, nick:'EGS ACADEMY',score:3567,image:require('@/img/profile.svg') },
                    {id:2,top:2, nick:'EGS ACADEMY',score:3567,image:require('@/img/profile.svg') },
                    {id:3,top:3, nick:'EGS ACADEMY',score:3567,image:require('@/img/profile.svg') },
                    {id:4,top:4, nick:'EGS ACADEMY',score:3567,image:require('@/img/profile.svg') },
                    {id:5,top:3, nick:'EGS ACADEMY',score:3567,image:require('@/img/profile.svg') },
                    {id:6,top:6, nick:'EGS ACADEMY',score:3567,image:require('@/img/profile.svg') },
                    {id:7,top:7, nick:'EGS ACADEMY',score:3567,image:require('@/img/profile.svg') },
                    {id:8,top:8, nick:'EGS ACADEMY',score:3567,image:require('@/img/profile.svg') },
                    {id:9,top:9, nick:'EGS ACADEMY',score:3567,image:require('@/img/profile.svg') },
                    {id:10,top:3, nick:'EGS ACADEMY',score:3567,image:require('@/img/profile.svg') },
                ],
      }
    },
    methods: {
      incrementLikes(index) {
        this.newsItems[index].likes++;
      },
      changeText(option) {
        // Отменяем активное состояние у всех кнопок
        var buttons = document.getElementsByClassName("blocka_button");
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove("active");
        }
  
        // Делаем кнопку, на которую кликнули, активной
        var clickedBtn = document.getElementById(option + "Btn");
        clickedBtn.classList.add("active");
  
        if (option === 'teams') {
          // Получаем элемент с id="nick" и изменяем его текст
          var nickElement = document.getElementById("nick");
          nickElement.innerHTML = "Название команды";
  
          // Получаем все элементы с классом "nick" и меняем текст на "EGS TEAM"
          var nickElements = document.getElementsByClassName("nick");
          for (var i = 0; i < nickElements.length; i++) {
            nickElements[i].innerHTML = "EGS TEAM";
          }
        } else if (option === 'players') {
          // Получаем элемент с id="nick" и изменяем его текст обратно на "Никнейм"
          var nickElement = document.getElementById("nick");
          nickElement.innerHTML = "Никнейм игрока";
  
          // Получаем все элементы с классом "nick" и меняем текст обратно на "EGS ACADEMY"
          var nickElements = document.getElementsByClassName("nick");
          for (var i = 0; i < nickElements.length; i++) {
            nickElements[i].innerHTML = "EGS ACADEMY";
          }
        }
      }
    },
  }
  
      function changeText(option) {
    // Отменяем активное состояние у всех кнопок
    var buttons = document.getElementsByClassName("blocka_button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
  
    // Делаем кнопку, на которую кликнули, активной
    var clickedBtn = document.getElementById(option + "Btn");
    clickedBtn.classList.add("active");
  
    if (option === 'teams') {
      // Получаем элемент с id="nick" и изменяем его текст
      var nickElement = document.getElementById("nick");
      nickElement.innerHTML = "Название команды";
  
      // Получаем все элементы с классом "nick" и меняем текст на "EGS TEAM"
      var nickElements = document.getElementsByClassName("nick");
      for (var i = 0; i < nickElements.length; i++) {
        nickElements[i].innerHTML = "EGS TEAM";
      }
    } else if (option === 'players') {
      // Получаем элемент с id="nick" и изменяем его текст обратно на "Никнейм"
      var nickElement = document.getElementById("nick");
      nickElement.innerHTML = "Никнейм игрока";
  
      // Получаем все элементы с классом "nick" и меняем текст обратно на "EGS ACADEMY"
      var nickElements = document.getElementsByClassName("nick");
      for (var i = 0; i < nickElements.length; i++) {
        nickElements[i].innerHTML = "EGS ACADEMY";
      }
    }
  }
     // Инициализация Bootstrap Collapse
    document.addEventListener('DOMContentLoaded', function () {
        const navbarToggleBtn = document.getElementById('navbarToggleBtn');
        const navbarNav = document.getElementById('navbarNav');

        navbarToggleBtn.addEventListener('click', function () {
            navbarNav.classList.toggle('show');
        });
    });
  </script>
  <style>
  
  </style>
  