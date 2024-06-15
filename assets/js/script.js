var artistPageXhr = new XMLHttpRequest();
var artist_page = document.querySelector('.artist_page');
var playlist_page = document.querySelector('.playlist_page');
var home_view = document.querySelector('.home_view');
var playlist_container = document.querySelector('.playlist_container');
var user_profile_container = document.querySelector('.user_profile_container');
var artist_page = document.querySelector('.artist_page');
var playlist_page = document.querySelector('.playlist_page');

var playlistPageXhr = new XMLHttpRequest();
var addToXhr = new XMLHttpRequest();



function artistPage() {
    artist_page.style.display = 'block';
    home_view.style.display = 'none';
    user_profile_container.style.display = 'none';
    playlist_container.style.display = 'none';
    playlist_page.style.display = 'none';
    like_songs.style.display = 'none';

    side_navs[0].classList.remove('active');
    side_navs[1].classList.remove('active');
    side_navs[2].classList.remove('active');





}


function playlistPage() {
    var like_songs = document.querySelector('.like_songs');


    playlist_page.style.display = 'block';
    home_view.style.display = 'none';
    artist_page.style.display = 'none';
    user_profile_container.style.display = 'none';
    like_songs.style.display = 'none';
    playlist_container.style.display = 'none';
    side_navs[0].classList.remove('active');
    side_navs[1].classList.remove('active');
    side_navs[2].classList.remove('active');



}


function searching() {


    playlist_page.innerHTML = playlistPageXhr.responseText;
    playlist_page.style.display = 'block';
    home_view.style.display = 'none';
    artist_page.style.display = 'none';
    user_profile_container.style.display = 'none';
    like_songs.style.display = 'none';
    playlist_container.style.display = 'none';
    side_navs[0].classList.remove('active');
    side_navs[1].classList.remove('active');
    side_navs[2].classList.remove('active');



}


//     pages 
function home() {
    var like_songs = document.querySelector('.like_songs');

    home_view.style.display = 'block';
    home_view.style.animation = '.5s play_list_intro';
    playlist_container.style.display = 'none';
    user_profile_container.style.display = 'none';
    artist_page.style.display = 'none';
    like_songs.style.display = 'none';
    playlist_page.style.display = 'none';
}

function all_songs() {
    var like_songs = document.querySelector('.like_songs');
    playlist_container.style.display = 'block';
    home_view.style.display = 'none';
    user_profile_container.style.display = 'none';
    artist_page.style.display = 'none';
    like_songs.style.display = 'none';
    playlist_page.style.display = 'none';



}


function openProfile() {
    var like_songs = document.querySelector('.like_songs');

    side_navs[0].classList.remove('active');
    side_navs[1].classList.remove('active');
    side_navs[2].classList.remove('active');

    user_profile_container.style.display = 'block';
    home_view.style.display = 'none';
    playlist_container.style.display = 'none';
    artist_page.style.display = 'none';
    like_songs.style.display = 'none';
    playlist_page.style.display = 'none';
}
// ---------------------------

function like_song() {

    var like_songs = document.querySelector('.like_songs');


    like_songs.style.display = 'block';
    playlist_page.style.display = 'none';
    home_view.style.display = 'none';
    artist_page.style.display = 'none';
    user_profile_container.style.display = 'none';
    playlist_container.style.display = 'none';

    side_navs[0].classList.remove('active');
    side_navs[1].classList.remove('active');
    side_navs[2].classList.add('active');



}
//----------------------------------------------------------------------



function add_to_playlist() {

    var music_id = document.querySelector('.list_music_id').value;
    var add_playlist_alert = document.querySelector('.add_playlist_alert');

    add_playlist_alert.style.display = 'none';
    pop_alert('add to playlist successfully', '#009669');


}




function delete_playlist() {


    pop_alert('play list deleted', 'red');
    location.reload();
    return home();



}

function delete_playlist_music() {
    var delete_playlist_id = document.getElementById('delete_playlist_id').value;

    pop_alert('delete music from this playlist', 'red');

    playlistPage(delete_playlist_id);




}


function add_like_song() {
    var like_songXhr = new XMLHttpRequest();
    like_songXhr.open("post", "pages", true);
    like_songXhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    like_songXhr.addEventListener("readystatechange", function() {
        pop_alert(artistPageXhr.responseText, '#009669');
    });
    like_songXhr.send("like_music_id=" + music_id);
}


function remove_like_song() {
    var like_songXhr = new XMLHttpRequest();

    pop_alert('remove to like song', 'red');
    like_song();

}


function pop_alert(text, bgc) {
    var pop_container = document.querySelector('.pop_container');
    var pop_text = document.getElementById('pop_text');
    pop_text.innerHTML = text;
    pop_container.style.display = 'flex';
    pop_container.style.background = bgc;
    setInterval(function() {
        pop_container.style.display = 'none';

    }, 7000);
}