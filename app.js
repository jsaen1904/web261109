
// app.js : 영화 배열을 다루는 함수 / 장성익(2651059) / 10주차

// 영화 배열 ⇒ 평균 평점
function average(list) {
    let sum = 0;

    for (const m of list) {
        sum += m.rating;
    }

    return sum / list.length;
}

console.log("평균:", average(movies));


// 영화 배열 ⇒ 평점 합계
function total(list) {
    let sum = 0;

    for (const m of list) {
        sum += m.rating;
    }

    return sum;
}

console.log("합계:", total(movies));


// 영화 배열 ⇒ 최고 평점 영화 객체
function best(list) {
    let top = list[0];

    for (const m of list) {
        if (m.rating > top.rating) {
            top = m;
        }
    }

    return top;
}

console.log("최고:", best(movies).title);


// 영화 배열 ⇒ 8점 이상 영화 개수
function countHigh(list) {
    let count = 0;

    for (const m of list) {
        if (m.rating >= 8) {
            count++;
        }
    }

    return count;
}

console.log("8점 이상:", countHigh(movies) + "편");


// 영화 배열 ⇒ 영화 평가 출력
function showResult(list) {
    for (const m of list) {
        let label;

        if (m.rating >= 8.5) {
            label = "명작";
        } else if (m.rating >= 7) {
            label = "추천";
        } else {
            label = "보통";
        }

        console.log(m.title + " (" + m.year + ") : " + m.rating + " " + label);
    }
}

showResult(movies);


// 평균, 최고 평점 영화 정보
const avgText = average(movies).toFixed(1);
const bestmovi = best(movies).title;

alert(`내 영화 ${movies.length}편, 평균 ${avgText}점, 최고는 ${bestmovi}`);


// 영화 배열, 최소 평점 ⇒ 그 이상인 영화만 담은 새 배열
function filterByRating(list, min) {
    return list.filter(m => m.rating >= min);
}

console.log("8점 이상:", filterByRating(movies, 8).length + "편");


// 영화 배열 ⇒ 평점 높은 순으로 정렬한 새 배열
function sortByRating(list) {
    return [...list].sort((a, b) => b.rating - a.rating);
}

const sorted = sortByRating(movies);

console.log("정렬 1위:", sorted[0].title, "/ 원본 1번:", movies[0].title);


// 날짜 문자열 ⇒ 올해까지 몇 년 전인지 계산
function yearsSince(dateStr) {
    return new Date().getFullYear() - new Date(dateStr).getFullYear();
}

console.log(yearsSince(movies[0].date) + "년 전 개봉");


// 포스터 경로, 크기 ⇒ TMDB 이미지 주소
function posterUrl(path, size) {
    return "https://image.tmdb.org/t/p/" + size + path;
}

console.log(posterUrl(movies[0].poster, "w342"));



document.title = "내 영화 " + movies.length + "편";



console.table(sortByRating(movies));



document.getElementById("out").textContent =
    "평균 " + average(movies).toFixed(1) + "점, 최고 " +
    best(movies).title;
