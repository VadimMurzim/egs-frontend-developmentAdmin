<template>
    <hadder/>
        <main class="  start" id="app" >
        <div class="row gx-4 flex-center-container" style="margin-right: 0;">
          <div class="col-md-3  order-1 order-md-0 block" style="max-width: 430px; margin-right:20px ; padding:0;">
            <div class="Block_container">
            <div class="block_HeadText"><img src="../img/Block_hedder_reit.svg" alt="" class="block_HeadImg">Турнирный рейтинг</div>
            <div class="hr_block"></div>
            <div class="block_ButtonContainer">
        <button id="playersBtn" class="blocka_button active" @click="changeText('players')">Игроки</button>
        <button id="teamsBtn" class="blocka_button" @click="changeText('teams')">Команды</button>
      </div>
            <div class="dropdown_block">
              <button class="dropbtn_block">KINGDOM | SEASON 5 Counter-Strike 2 <img src="../img/Treugolnik.svg" alt="" class="dropbtn_img"></button>
              <div class="dropdown-content_block">
                <a href="#">Ссылка 1</a>
                <a href="#">Ссылка 2</a>
                <a href="#">Ссылка 3</a>
              </div>
            </div>
            <div class="koloni_container">
              <div class="kolonka">Место</div>
              <div class="kolonka" id="nick">Никнейм игрока</div>
              <div class="kolonka">Очки</div>
              <div class="kolonka">Профиль</div>
            </div>
            <div class="reiting_container">
              <div  class="stroka_container">
                <div v-for="(player, index) in players" :key="player.id" :class="'stroka stroka-' + (index + 1)">
                  <div class="top">{{ player.top }}</div>
                  <div class="nick">{{ player.nick }}</div>
                  <div class="skore">{{player.score}}</div>
                  <img :src="player.image" alt="" class="profile">
                </div>
             
      
              </div>
            </div>
            </div>
          </div>
         
          <div class="col-md-6 order-0 order-md-1 midle" style="width: 880px; margin-right:20px; padding: 0;">
        <img :src="streamItem.url" alt="" v-for="(streamItem, index) in streams" :key="index">
      </div>
    
          <div class="col-md-3  order-2 block" style="max-width: 430px; padding:0 ;">
            <div class="Block_container">
                <div class="block_HeadText"><img src="../img/metsh.svg" alt="" class="block_HeadImg" >Предстоящие матчи</div>
                <div class="hr_block"></div>
                <div class="block_ButtonContainer">
                  
                </div>
                <div class="dropdown_block">
                  <button class="dropbtn_block">KINGDOM | SEASON 5 Counter-Strike 2<img src="../img/Treugolnik.svg" alt="" class="dropbtn_img"></button>
                  <div class="dropdown-content_block">
                    <a href="#">Ссылка 1</a>
                    <a href="#">Ссылка 2</a>
                    <a href="#">Ссылка 3</a>
                  </div>
                </div>
               <div class="bloksss">
    
    
                
                <div class="reitingg_container" v-for="(match, index) in matshes" :key="index">
          <div class="block_right_container">
            <div class="block_left">
              <img :src="match.LogoOne" alt="" class="block_left_img">
              <div class="pts">{{ match.ptsOne }}pts</div>
              <a href="#"><div class="Reiting">Рейтинг</div></a>
            </div>
          </div>
          <div class="block_center">
            <div class="names">
              <div class="team1">{{ match.team1 }}</div>
              <div class="vs">VS</div>
              <div class="team2">{{ match.team2 }}</div>
            </div>
            <div class="tire">
              <div class="tire1">-</div>
              <div class="tire2">-</div>
            </div>
            <div class="info">
              <div class="time">{{ match.time }}</div>
              <div class="date">{{ match.date }}</div>
              <div class="statys">{{ match.statys }}</div>
            </div>
            <div class="reitingg_buton">
              <button id="playersBtn" class="blocka_buttonn" style="height: 25px; width: 129px; margin-top: 5px;">Подробнее</button>
            </div>
          </div>
          <div class="block_right">
            <img :src="match.LogoTwo" alt="" class="block_left_img">
            <div class="pts">{{ match.ptsTwo }}pts</div>
            <a href="#"><div class="Reiting">Рейтинг</div></a>
          </div>
        </div>
      </div>
    
    
        </div>
              </div>
          </div>
       
        <div class="row gx-4 flex-center-container" style="margin-right: 0;">
          <div class="col-md-3  order-1 order-md-0 block" style="max-width: 430px; margin-right:20px ; padding:0;">
            <div class="Block_container">
              <div class="block_HeadText"><img src="../img/Block_hedder_reit.svg" alt="" class="block_HeadImg ">Матчмейкинг рейтинг</div>
              <div class="hr_block"></div>
              <div class="block_ButtonContainer">
              
              </div>
              <div class="dropdown_block">
                <button class="dropbtn_block">SEASON 2024<img src="../img/Treugolnik.svg" alt="" class="dropbtn_img"></button>
                <div class="dropdown-content_block">
                  <a href="#">Ссылка 1</a>
                  <a href="#">Ссылка 2</a>
                  <a href="#">Ссылка 3</a>
                </div>
              </div>
              <div class="koloni_container">
                <div class="kolonka">Место</div>
                <div class="kolonka" id="nick">Никнейм игрока</div>
                <div class="kolonka">Очки</div>
                <div class="kolonka">Профиль</div>
              </div>
              <div class="reiting_container" style="height: 323px;">
                <div class="stroka_container">
                  <div v-for="(player, index) in players" :key="player.id" :class="'stroka stroka-' + (index + 1)">
                  <div class="top">{{ player.top }}</div>
                  <div class="nick">{{ player.nick }}</div>
                  <div class="skore">{{player.score}}</div>
                  <img :src="player.image" alt="" class="profile">
                </div>
                  
        
        
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6  order-0 order-md-1 " style="max-width: 880px; margin-right:20px ; padding: 0;">
            <div class="news_container">
              <div class="news_head">
                <img src="../img/news_head.svg" alt="" class="news_head_img">
                <div class="news_head_text">Новости проекта</div>
              </div>
              <div class="news" v-for="(item, index) in newsItems" :key="index">
          <div class="news_image">
            <img :src="item.image" alt="" class="news_img" @click="incrementLikes(index)">
            <div class="news_img_div"></div>
          </div>
          <div class="news_main_container">
            <div class="news_container_head">
              <div class="news_container_head_text">{{ item.title }}</div>
              <div class="news_container_head_date">{{ item.date }}</div>
            </div>
            <div class="news_container_text_main">{{ item.text }}</div>
            <div class="news_futer_container">
              <div class="news_container_znachki">
                <div class="news_vives">
                  <img src="../img/vives.svg" alt="" class="news_vives_img">
                  <div class="news_vives_skore">{{ item.views }}</div>
                </div>
                <div class="news_likes">
                  <img src="../img/likes.svg" alt="" class="news_likes_img" @click="incrementLikes(index)">
                  <div class="news_likes_skore">{{ item.likes }}</div>
                </div>
              </div>
              <button id="playersBtn" class="blocka_buttonn" style="width: 225px; padding: 7px 20px; position: relative; left: 130px; margin-bottom: 0;">Перейти к новости</button>
            </div>
          </div>
        </div>
         
              <a href="#" style="text-decoration: none;" ><div class="news__a">
                <div class="news_a_text" style="text-decoration: none;">Нажмите здесь, чтобы посмотреть все новости</div>
                <svg class="news_a_svg" xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9.64645 8.23223C9.84171 8.4275 10.1583 8.4275 10.3536 8.23223L18.2929 0.292893C18.6834 -0.0976311 19.3166 -0.0976311 19.7071 0.292893C20.0976 0.683417 20.0976 1.31658 19.7071 1.70711L10.7071 10.7071C10.3166 11.0976 9.68342 11.0976 9.29289 10.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#EAECEC"/>
                  </svg>
              </div></a>
            
    
    
    
              
            </div>
    
          </div>
          
          <div class="col-md-3  order-2 block" style="max-width: 430px; padding:0 ;">
            <div class="Block_container">
              <div class="block_HeadText"><img src="../img/metsh.svg" alt="" class="block_HeadImg" style="position: relative;top: 5px;">Результаты матчей</div>
              <div class="hr_block"></div>
              <div class="block_ButtonContainer">
                
              </div>
              <div class="dropdown_block">
                <button class="dropbtn_block">KINGDOM | SEASON 5 Counter-Strike 2<img src="../img/Treugolnik.svg" alt="" class="dropbtn_img"></button>
                <div class="dropdown-content_block">
                  <a href="#">Ссылка 1</a>
                  <a href="#">Ссылка 2</a>
                  <a href="#">Ссылка 3</a>
                </div>
              </div>
             <div class="bloksss">
    
              <div class="reitingg_container" v-for="(match, index) in upcomingmatches" :key="index">
          <div class="block_right_container">
            <div class="block_left">
              <img :src="match.LogoOne" alt="" class="block_left_img">
              <div class="pts">{{ match.pts }}pts</div>
              <a href="#"><div class="Reiting">Рейтинг</div></a>
            </div>
          </div>
          <div class="block_center">
            <div class="names">
              <div class="team1">{{ match.team1 }}</div>
              <div class="vs">VS</div>
              <div class="team2">{{ match.team2 }}</div>
            </div>
            <div class="tire">
              <div class="tire1">
                <div class="vinner" v-if="match.winner === 1">
                  <img src="../img/korona.svg" alt="" class="vinner_img">
                </div>
                {{ match.score1 }}
              </div>
              <div class="tire2">
                <div class="vinner" v-if="match.winner === 2">
                  <img src="../img/korona.svg" alt="" class="vinner_img">
                </div>
                {{ match.score2 }}
              </div>
            </div>
            <div class="info_true">
              <div class="time">{{ match.time }}</div>
              <div class="date">{{ match.date }}</div>
              <div class="statys">Статус: <div class="true">{{ match.status }}</div></div>
            </div>
            <div class="reitingg_buton">
              <button id="playersBtn" class="blocka_buttonn" style="height: 25px; width: 129px; margin-top: 5px;position: relative;top: -20px;">Подробнее</button>
            </div>
          </div>
          <div class="block_right">
            <img :src="match.LogoTwo" alt="" class="block_left_img">
            <div class="pts">{{ match.pts }}pts</div>
            <a href="#"><div class="Reiting">Рейтинг</div></a>
          </div>
        </div>
    
    
    
    
     
      
      </div>
            </div>
           
            <div class="Block_container" style="margin-bottom: 280px;">
              <div class="block_HeadText"><img src="../img/metsh.svg" alt="" class="block_HeadImg" style="position: relative;top: 5px;">Ближайшие турниры</div>
              <div class="hr_block"></div>
       
              <div class="reiting_container" style="height: 390px;">
                <div class="stroka_container">
              
                <div class="neuturnir_container" v-for="(tournament, index) in tournaments" :key="index">
          <div class="neuturnir_container_name">{{ tournament.name }}</div>
          <div class="neuturnir_container_text">
            <div class="neuturnir_text">Игра: {{ tournament.game }}</div>
            <div class="neuturnir_text">{{ tournament.date }}</div>
            <div class="neuturnir_text">Статус: <div class="true_TEXT">{{ tournament.status }}</div></div>
          </div>
          <div class="button_cont">
            <button id="playersBtn" class="blocka_buttonn" style="display: flex;
              width: 225px;
              padding: 7px 20px;
              justify-content: center;
              align-items: center;
              gap: 10px;">Зарегистрироваться</button>
          </div>
        </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      
      </main>
     <foter/>
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
            { image: require('../img/news.png'),title: 'Стартует KINGDOM Season 4 Counter-Strike 2',date: '21.03.2024',text: 'Также как высококачественный прототип будущего проекта требует определения и уточнения направлений прогрессивного развития. Но постоянный количественный рост и сфера нашей активности в значительной степени обусловливает важность анализа существующих паттернов поведения. Наше дело не та...',views: 296,likes: 31},
            { image: require('../img/news.png'),title: 'Стартует KINGDOM Season 4 Counter-Strike 2',date: '21.03.2024',text: 'Также как высококачественный прототип будущего проекта требует определения и уточнения направлений прогрессивного развития. Но постоянный количественный рост и сфера нашей активности в значительной степени обусловливает важность анализа существующих паттернов поведения. Наше дело не та...',views: 296,likes: 31},
            { image: require('../img/news.png'),title: 'Стартует KINGDOM Season 4 Counter-Strike 2',date: '21.03.2024',text: 'Также как высококачественный прототип будущего проекта требует определения и уточнения направлений прогрессивного развития. Но постоянный количественный рост и сфера нашей активности в значительной степени обусловливает важность анализа существующих паттернов поведения. Наше дело не та...',views: 296,likes: 31},
            { image: require('../img/news.png'),title: 'Стартует KINGDOM Season 4 Counter-Strike 2',date: '21.03.2024',text: 'Также как высококачественный прототип будущего проекта требует определения и уточнения направлений прогрессивного развития. Но постоянный количественный рост и сфера нашей активности в значительной степени обусловливает важность анализа существующих паттернов поведения. Наше дело не та...',views: 296,likes: 31},
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
    <style scoped>
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
    *{
        transition: 0.3s ease;
        font-family: Gilroy;
        transform: 0.3s ease;
    }
    body {
        background-color: #151319;
        font-family: 'Gilroy', sans-serif;
      }
    
    
    
    body {
        background-color: #151319;
        font-family: 'Gilroy', sans-serif;
      }
      
    
      
      .start {
        margin-top: 70px;
      }
      main{width: 100%;}
      .block {
        margin-bottom: 20px;
        max-width: 430px;
        height: 500px;
        border-radius: 10px;
        border-bottom: 2px solid var(--default-main-logo, #FD3D48);
        background: var(--default-main, #1E1C24);
      }
      
      .midle {
            border-bottom: 2px solid var(--default-main-logo, #FD3D48);
         border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        margin-bottom: 20px;
        /* margin-right: 20px;
        margin-left: 20px; */
        /* background-image: url(); */
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        max-width: 880px;
        height: calc(880px * 0.568); /* пропорции изображения */
      }
      
      .flex-center-container {
        display: flex;
        justify-content: center;
      }
    
    
    /* блок */
    .Block_container{
        margin-bottom: 20px;
        
        width: 430px;
    height: 500px;
    flex-shrink: 0;
    border-radius: 10px;
    border-bottom: 2px solid var(--default-main-logo, #FD3D48);
    background: var(--default-main, #1E1C24);
      }
    .block_HeadImg{
        margin-top: 20px;
        margin-left: 30px;
        margin-right: 15px;
      }
      .block_HeadImgG{
        margin-top: 25px;
        margin-left: 30px;
        margin-right: 15px;
      }
      .block_HeadText{
     display: flex;
     align-items: end;
    flex-shrink: 0;
    color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
      }
      .hr_block{
        margin-left: 30px;
        margin-top: 20px;
        margin-bottom: 10px;
        width: 370px;
    height: 1px;
    flex-shrink: 0;
    stroke-width: 2px;
    background-color: var(--default-bloki, #272A31);
      }
      .block_ButtonContainer{
        width: 405px;
        margin-left: 13px;
        display: flex;
        justify-content: space-evenly;
      }
      .blocka_button{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        width: 51px;
    height: 17px;
    flex-shrink: 0;
    color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
        text-align: center;
    width: 175px;
    height: 31px;
    padding: 7px 40px;
    
    align-items: center;
    flex-shrink: 0;
    border-radius: 7px;
    border: 2px solid var(--button-default, #272A31);
    margin-bottom: 10px;
      }
      .blocka_button:hover:not(.active) {
        display: flex;
        align-items: center;
        justify-content: center;
        
        background: var(--button-hover, #242229);
        border: none;
      }
      .blocka_button:active{
        align-items: center;
        justify-content: center;
       display: flex;
        background: var(--button-active, #FD3D48);
    
      }
      .containerBloksL{
        margin-left: 70px;
        margin-top: 70px;
      }
      .kolonka{
        color: var(--default-text5, #4A4D55);
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
      }
      #nick{
        width: 127px;
      }
    
      .stroka.stroka-1 {
        background: var(--gradient-placement-gold_placement, linear-gradient(90deg, #F90 -6.23%, rgba(36, 34, 41, 0.00) 79.28%), #242229);
    }
    
    .stroka.stroka-2 {
        background: var(--gradient-placement-silver_placement, linear-gradient(90deg, #8E91A7 -6.23%, rgba(36, 34, 41, 0.00) 79.28%), #242229);
    }
    
    .stroka.stroka-3 {
        background: var(--gradient-placement-bronze_placement, linear-gradient(90deg, #A86243 -6.23%, rgba(36, 34, 41, 0.00) 79.28%), #242229);
    }
      .active {
        background: var(--button-active, #FD3D48);
        border: none;
      }
      .nickK{
        color: var(--default-main-text, #EAECEC);
        font-family: Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .containerBlokR{
        margin-right: 70px;
        margin-top: 70px;
      }
      .block_right_container{
        display: flex;
      }
      .block_left{
        display: flex;
        
        flex-direction: column;
        align-items: center;
        width: 80px;
    height: 143px;
    flex-shrink: 0;
    border-radius: 7px;
    border-left: 2px solid var(--default-main-logo, #FD3D48);
    background: var(--default-bloki, #272A31);
      }
      .block_left_img{
        margin-top: 20px;
      }
      .dropdown_block {
        background-color: transparent;
        margin-left: 30px;
        margin-bottom: 10px;
        width: 370px;
        display: inline-block;
    padding: 9px 25px 9px 25px;
    justify-content: center;
    align-items: center;
    gap: 42px;
    border-radius: 7px;
    background: var(--default-bloki2, #242229);
      }
    
      .dropdown-content_block {
        width: 335px;
        display: none;
        position: absolute;
       
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }
    
      .dropdown-content_block a {
        position: relative;
        left: -25px;
        background: var(--default-bloki2, #242229);
        color:#787C87;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
      }
      .dropdown-content_block a:last-child {
       border-bottom-left-radius: 7px;
       border-bottom-right-radius: 7px;
      }
      .dropdown-content_block a:hover {
        background-color: #f1f1f1;
      }
    
      .dropdown_block:hover .dropdown-content_block {
        display: block;
      }
      .dropbtn_block{
        color:#787C87;
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: space-between;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
         margin: 0;
        padding: 0;
        border: none;
        background: none;
       
        cursor: pointer;
      }
      .koloni_container{
        margin-left: 30px;
        margin-right: 30px;
        justify-content: space-between;
        display: flex;
    
      }
      .stroka{
        align-items: center;
        justify-content: space-between;
        display: flex;
        width: 370px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 7px;
    background: var(--default-bloki2, #242229);
    margin-bottom: 5px;
      }
      .top{
        margin-left: 20px;
        color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
      }
      .nick{
        width: 100px;
        position: relative;
        right: 7px;
        color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
      }
    
      .skore{
       /* position: relative;
       left: -10px; */
       color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
      }
      .profile{
        height: 12px;
        margin-right: 25px;
      
      }
      .reiting_container{
        margin-left: 30px;
        height: 282px;
        width: 390px;
        overflow: auto;
    }
    /* конец */
    /* Все остальное */
    .block_left_img{
        margin-top: 20px;
      }
      .pts{
        margin-top: 11px;
        color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
      }
      .Reiting{
        margin-top: 2px;
        color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration-line: underline;
      }
      .block_center{
        width: 210px;
      }
      .names{
        margin-top: 20px;
        display: flex;
        justify-content: space-evenly;
      }
      .reitingg_container{
        margin-bottom: 5px;
        display: flex;
        margin-left: 30px;
        width: 370px;
        height: 143px;
    flex-shrink: 0;
    border-radius: 7px;
    background: var(--default-bloki2, #242229);
      }
      .team1{
        color: #FFF;
    
        font-family: Gilroy;
        font-size: 16px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
      }
      .vs{
        color: #FFF;
    
        font-family: Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .team2{
        color: #FFF;
    
        font-family: Gilroy;
        font-size: 16px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
      }
      .tire{
        display: flex;
        justify-content: space-around;
      }
      .tire1{
        display: flex;
        flex-direction: column;
        align-items: end;
        color: #FFF;
    
        font-family: Gilroy;
        font-size: 16px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
      }
      .tire2{
        display: flex;
        
        align-items: end;
        color: #FFF;
    
        font-family: Gilroy;
        font-size: 16px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
      }
      .info{
        position: relative;
        top: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
    
      }
        .info2{
        position: relative;
        
        display: flex;
        flex-direction: column;
        align-items: center;
    
      }
      .info_true{
        position: relative;
        top: -15px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .time{
        color: var(--default-text4, #787C87);
        font-family: Gilroy;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .date{
        color: var(--default-text4, #787C87);
        font-family: Gilroy;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .statys{
        display: flex;
        color: var(--default-text4, #787C87);
        font-family: Gilroy;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .reitingg_buton{
        display: flex;
        justify-content: center;
      }
      .block_right{
        width: 80px;
    height: 143px;
    flex-shrink: 0;
    border-radius: 7px;
    border-right: 2px solid var(--default-main-logo, #FD3D48);
    background: var(--default-bloki, #272A31);
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .bloksss{
        margin-right: 12px;
        max-height: 348px;
        overflow: auto;
      }
      .vinner_img{
        position: relative;
        right: -1px;
      }
      .true{
        color: var(--default-text2, #00FF5A);
    font-family: Gilroy;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
      }
      .blocka_buttonn{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        width: 51px;
    height: 17px;
    flex-shrink: 0;
    color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
        text-align: center;
    width: 175px;
    height: 31px;
    padding: 7px 40px;
    
    align-items: center;
    flex-shrink: 0;
    border-radius: 7px;
    border: 2px solid var(--button-default, #272A31);
    margin-bottom: 10px;
      }
      .blocka_buttonn:hover {
        align-items: center;
        justify-content: center;
       display: flex;
        background: var(--button-hover, #1E1C24);
        border: none;
      }
      .blocka_buttonn:active{
        align-items: center;
        justify-content: center;
       display: flex;
        background: var(--button-active, #FD3D48);
    
      }
      .folse{
        color: var(--default-main-logo, #FD3D48);
    font-family: Gilroy;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
      }
      .stream{
        margin-top: 70px;
        display: flex;
        justify-content: center;
      }
      .news_container{
       
        width: 880px;
    height: 1008px;
    flex-shrink: 0;
    border-radius: 10px;
    border-bottom: 2px solid var(--default-main-logo, #FD3D48);
    background: var(--default-main, #1E1C24);
      }
      .news_head{
        margin-right: 30px;
        margin-left: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        border-bottom: var(--default-bloki, #272A31) solid 1px;
    
      }
      .news_head_text{
        margin-left: 15px;
        color: var(--default-main-text, #EAECEC);
        font-family: Gilroy;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
      }
      .news_img{
        border-top-left-radius: 7px;
        border-bottom-left-radius: 7px;
        width: 321px;
    height: 200px;
      }
      .news_img_div{
        left: 2px;
        border-top-left-radius: 7px;
        border-bottom-left-radius: 7px;
        position: relative;
        bottom: 200px;
        width: 321px;
        height: 200px;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.00) 47.91%, rgba(36, 34, 41, 0.72) 72.22%, #242229 100.18%);
      }
      .news{
        
        display: flex;
    width: 820px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 7px;
    background: var(--default-bloki2, #242229);
      
        margin-top: 20px;
        margin-left: 30px;
      }
      .news_container_head_text{
        color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
      }
      .news_container_head{
        height: 32px;
    
        border-bottom: var(--default-bloki, #272A31) solid 2px;
        margin-top: 15px;
        margin-left: 20px;
        margin-right: 25px;
        width: 454px;
        display: flex;
        justify-content: space-between;
      }
      .news_image{
        height: 200px;
        width: 321px;
      }
      .news_container_head_date{
        color: var(--default-text4, #787C87);
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
      }
      .news_main_container{
        display: flex;
        flex-direction: column;
      }
      .news_container_text_main{
        margin-top: 15px;
        margin-left: 20px;
        width: 454px;
    color: var(--default-text4, #787C87);
    text-align: justify;
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
      }
      .news_container_znachki{
        align-items: center;
        width: 100px;
        display: flex;
        justify-content: space-evenly;
      }
      .news_likes{
        display: flex;
        margin-left: 20px;
      }
      .news_vives{
        display: flex;
      }
      .news_vives_skore{
        margin-left: 5px;
        color: var(--default-text4, #787C87);
    text-align: justify;
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
      }
      .news_likes_skore{
        margin-left: 5px;
        color: var(--default-text4, #787C87);
    text-align: justify;
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
      }
      .news_container_znachki{
        margin-left: 20px;
      }
      .news_futer_container{
        margin-top: 9px;
        height: 30px;
        display: flex;
        align-items: center;
    
      }
      .news__a{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        top: -200px;
        right: -30px;
        position: relative;
        border-radius: 7px 7px 0px 0px;
        width: 820px;
    height: 200px;
        z-index: 2;
        background: linear-gradient(180deg, rgba(36, 34, 41, 0.73) 22.12%, #1E1C24 100%);
      }
      .news_a_text{
        text-decoration: none;
        color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
      }
      .news_a_svg{
        margin-top: 15px;
      }
    .containerSliderAndContant{
      margin-left:20px ;
      margin-right:20px ;
    }
    .neuturnir_container{
      margin-bottom: 5px;
      width: 370px;
    height: 162px;
    flex-shrink: 0;
    border-radius: 7px;
    border-left: 2px solid var(--default-main-logo, #FD3D48);
    background: var(--default-bloki2, #242229);
    }
    .neuturnir_container_name{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 370px;
    height: 55px;
    flex-shrink: 0;
    border-radius: 7px 7px 0px 0px;
    
    background: var(--default-bloki, #272A31);
      color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    }
    .neuturnir_container_text{
      margin-top: 10PX;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .neuturnir_text{
      color: var(--default-text4, #787C87);
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
      display: flex;
    
    }
    .true_TEXT{
      margin-left: 5PX;
      color: var(--default-text2, #00FF5A);
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    }
    .button_cont{
      margin-top: 10px;
      display: flex;
      justify-content: center;
    }
    .button_container{
      display: flex;
      
    }
    
    </style>
    