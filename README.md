# Hindi Anime API

> A simple API for accessing Hindi anime content.

---

>## 📌 About
This API does not host or store any files on its own server.  
It only provides access to publicly available resources.

---

>## ⚠️ Disclaimer
This project is developed strictly for **educational purposes**.  
The repository owner is not responsible for any misuse or illegal activities performed using this API.

---

>## 📚 Table of Contents

- [Installation](#installation)
  - [Local-Installation](#local-installation)
- [Documentation](#documentation)
  - [Recent Animes](#recent-anime)
  - [Anime Series](#anime-series)
  - [Search Anime](#search-anime)
  - [Specific Anime Information](#specific-anime-information)
  - [Anime Stream Info](#anime-stream-info)
- [Credits](#credits)
  - [Parth](#parth)

---

> ## Installation

### Local Installation

```bash
git clone https://github.com/your-username/hindi-anime-api.git
cd hindi-anime-api
npm install
npm start
```

> ## Documentation

### Recent Anime
```bash
GET /api/recents
```
#### 🔗 Endpoint

```bash
/api/recents
```
> #### No parameter required ❌

#### Example of request

```javascript
import axios from "axios";
const resp = await axios.get("/api/recents");
console.log(resp.data);
```
#### Sample response
```javascript
{
  "success": true,
  "message": "Data Scraped successfully!",
  "results": [
    {
      "title": "Fairy Tail",
      "rating": "7.9",
      "image": "https://image.tmdb.org/t/p/w500/dorzFzD65utfD39pEu7PbcXmEFH.jpg",
      "animeId": "fairy-tail-season-7-46261"
    },
    {
      "title": "Fire Force",
      "rating": "8.369",
      "image": "https://image.tmdb.org/t/p/w500/qGX5f2jwgIsz1bvIt0qwjzrl7Pm.jpg",
      "animeId": "fire-force-season-3-88046"
    },
    {
      "title": "The Daily Life of the Immortal King",
      "rating": "8.3",
      "image": "https://image.tmdb.org/t/p/w500/33OJV60ufA9XVsdG0zClbuTXqzA.jpg",
      "animeId": "the-daily-life-of-the-immortal-king-season-5-98123"
    },
    {
      "title": "SPY x FAMILY",
      "rating": "8.517",
      "image": "https://image.tmdb.org/t/p/w500/dAJMMOtzTDw8sObrvY26JLMTMRU.jpg",
      "animeId": "spy-x-family-season-3-120089"
    },
    {
      "title": "Tojima Wants to Be a Kamen Rider",
      "rating": "7.9",
      "image": "https://image.tmdb.org/t/p/w500/bD80ugDX7krshLcWxnqRYCOQPoo.jpg",
      "animeId": "tojima-wants-to-be-a-kamen-rider-season-1-285788"
    },
    {
      "title": "Hana-Kimi",
      "rating": "7.4",
      "image": "https://image.tmdb.org/t/p/w500/wCZn0Is62Tx4HC9WuFGYysjeHCx.jpg",
      "animeId": "hana-kimi-season-1-254492"
    },
    {
      "title": "You and I Are Polar Opposites",
      "rating": "8.7",
      "image": "https://image.tmdb.org/t/p/w500/9hRuMU33DBz4z1vaYBRqLLuFFbQ.jpg",
      "animeId": "you-and-i-are-polar-opposites-season-1-278043"
    },
    {
      "title": "Kunon the Sorcerer Can See",
      "rating": "8.7",
      "image": "https://image.tmdb.org/t/p/w500/kGGdMa1fEwMiyyFB1AnUox5cshy.jpg",
      "animeId": "kunon-the-sorcerer-can-see-season-1-282946"
    },
    {
      "title": "There Was a Cute Girl in the Hero's Party, so I Tried Confessing to Her",
      "rating": "8.6",
      "image": "https://image.tmdb.org/t/p/w500/k65RaatXC3rNbcTiBr2gTpI7Png.jpg",
      "animeId": "there-was-a-cute-girl-in-the-hero-s-party-so-i-tried-confessing-to-her-season-1-295366"
    },
    {
      "title": "Trigun Stargaze",
      "rating": "7.271",
      "image": "https://image.tmdb.org/t/p/w500/nPQnCHcztTVyvadunN9qdS9pfX6.jpg",
      "animeId": "trigun-stargaze-season-2-204266"
    },
    {
      "title": "BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense.",
      "rating": "7.4",
      "image": "https://image.tmdb.org/t/p/w500/yN3NNZWo3r1ilxWJtMKNV8UAvv0.jpg",
      "animeId": "bofuri-i-don-t-want-to-get-hurt-so-i-ll-max-out-my-defense-season-1-96402"
    },
    {
      "title": "A Misanthrope Teaches a Class for Demi-Humans",
      "rating": "8",
      "image": "https://image.tmdb.org/t/p/w500/peWartTl3etfWWjkJUBjju5tfZ3.jpg",
      "animeId": "a-misanthrope-teaches-a-class-for-demi-humans-season-1-303434"
    }
  ]
}
```

### Anime Series

```bash
GET /api/series/
```

#### 🔗 Endpoints

```bash
/api/series/page={Number}
```

#### Parameters

| Parameter | Parameter-Type | Data-Type | Description | Mandatory ? | Default |
| :-------: | :------------: | :-------: | :---------: | :---------: | :-----: |
|   `page`  |    `query`     |   Number  |   Page no.  |    No ❌️    |    1    |


#### Example request

```javascript
import axios from "axios";
const resp = await axios.get("/api/series/page=3");
console.log(resp.data);
```

#### Sample response

```javascript
{
  "success": true,
  "message": "Data Scraped successfully!!",
  "results": {
    "currentPage": 3,
    "totalPages": 57,
    "results": [
      {
        "title": "I'm Standing on a Million Lives",
        "rating": "6.5",
        "image": "https://image.tmdb.org/t/p/w500/c6zSIVMAKdaVrpIYAg70xPAhrMk.jpg",
        "animeId": "i-m-standing-on-a-million-lives-season-1-99995"
      },
      {
        "title": "I'm Standing on a Million Lives",
        "rating": "6.5",
        "image": "https://image.tmdb.org/t/p/w500/d3V3aEIuQnyfimJwzqp0e3MWk8.jpg",
        "animeId": "i-m-standing-on-a-million-lives-season-2-99995"
      },
      {
        "title": "Trigun Stargaze",
        "rating": "7.3",
        "image": "https://image.tmdb.org/t/p/w500/4rMkVmkk6AzrcbBX9JSwqyG7pbK.jpg",
        "animeId": "trigun-stargaze-season-1-204266"
      },
      {
        "title": "TRIGUN STAMPEDE",
        "rating": "7.3",
        "image": "https://image.tmdb.org/t/p/w500/nPQnCHcztTVyvadunN9qdS9pfX6.jpg",
        "animeId": "trigun-stampede-season-2-204266"
      },
      {
        "title": "Yuri!!! on Ice",
        "rating": "8.5",
        "image": "https://image.tmdb.org/t/p/w500/ArCIHv44gLLdjqPTbeHLRtRkF8q.jpg",
        "animeId": "yuri-on-ice-season-1-68129"
      },
      {
        "title": "Campfire Cooking in Another World with My Absurd Skill",
        "rating": "8.3",
        "image": "https://image.tmdb.org/t/p/w500/3k94oxp4zio6o3JquKbrmXhSAu6.jpg",
        "animeId": "campfire-cooking-in-another-world-with-my-absurd-skill-season-1-213402"
      },
      {
        "title": "MF GHOST",
        "rating": "8.2",
        "image": "https://image.tmdb.org/t/p/w500/1IlFSBMq0hTeuvAEMq5t00EsIyN.jpg",
        "animeId": "mf-ghost-season-1-154526"
      },
      {
        "title": "Ranma1/2",
        "rating": "8.2",
        "image": "https://image.tmdb.org/t/p/w500/5RUiNJBFufEmpzE5phIjZ3b7c2P.jpg",
        "animeId": "ranma1-2-season-1-259140"
      },
      {
        "title": "Bleach",
        "rating": "8.4",
        "image": "https://image.tmdb.org/t/p/w500/5iVUUnE2tgBPypACYNobCKHagfV.jpg",
        "animeId": "bleach-season-1-30984"
      },
      {
        "title": "Bleach",
        "rating": "8.4",
        "image": "https://image.tmdb.org/t/p/w500/2EewmxXe72ogD0EaWM8gqa0ccIw.jpg",
        "animeId": "bleach-season-17-30984"
      },
      {
        "title": "Death Note",
        "rating": "8.6",
        "image": "https://image.tmdb.org/t/p/w500/1BloDOEmKxPFzbCIuNCLmCrcx6L.jpg",
        "animeId": "death-note-season-1-13916"
      },
      {
        "title": "Suicide Squad ISEKAI",
        "rating": "7.4",
        "image": "https://image.tmdb.org/t/p/w500/mCEeR8Fidw9Ck5oySoe96snj0BZ.jpg",
        "animeId": "suicide-squad-isekai-season-1-229926"
      },
      {
        "title": "One Piece",
        "rating": "8.7",
        "image": "https://image.tmdb.org/t/p/w500/9hW62RDq5Dno8vLABXscddjEq9M.jpg",
        "animeId": "one-piece-season-1-37854"
      },
      {
        "title": "Naruto Shippūden",
        "rating": "8.5",
        "image": "https://image.tmdb.org/t/p/w500/gOVd7bfDFEElJn1EbjfNgFpr5qE.jpg",
        "animeId": "naruto-shippuden-season-5-31910"
      },
      {
        "title": "Naruto Shippūden",
        "rating": "8.5",
        "image": "https://image.tmdb.org/t/p/w500/3rEBLrk8knUHQD3XoIdqGbHGSYE.jpg",
        "animeId": "naruto-shippuden-season-11-31910"
      },
      {
        "title": "Naruto Shippūden",
        "rating": "8.5",
        "image": "https://image.tmdb.org/t/p/w500/1F7Z31SsD48go66RMVs9YDpae5V.jpg",
        "animeId": "naruto-shippuden-season-9-31910"
      },
      {
        "title": "Naruto Shippūden",
        "rating": "8.5",
        "image": "https://image.tmdb.org/t/p/w500/gL0jung50Nf3SZVT9Y48TwbrIV1.jpg",
        "animeId": "naruto-shippuden-season-1-31910"
      },
      {
        "title": "Naruto Shippūden",
        "rating": "8.5",
        "image": "https://image.tmdb.org/t/p/w500/42QaFSno1zuAPoaSydZw0koukvw.jpg",
        "animeId": "naruto-shippuden-season-7-31910"
      },
      {
        "title": "Naruto Shippūden",
        "rating": "8.5",
        "image": "https://image.tmdb.org/t/p/w500/bAzkNrsZGh9XwmREpQWwrKDQM5G.jpg",
        "animeId": "naruto-shippuden-season-2-31910"
      },
      {
        "title": "Naruto Shippūden",
        "rating": "8.5",
        "image": "https://image.tmdb.org/t/p/w500/msnDBdYwXyNgLUzAC5SX1o1mqvq.jpg",
        "animeId": "naruto-shippuden-season-8-31910"
      },
      {
        "title": "Naruto Shippūden",
        "rating": "8.5",
        "image": "https://image.tmdb.org/t/p/w500/ltqHeYefLrUNcJuq5By8XXsnEmn.jpg",
        "animeId": "naruto-shippuden-season-3-31910"
      },
      {
        "title": "Naruto Shippūden",
        "rating": "8.5",
        "image": "https://image.tmdb.org/t/p/w500/wxKrPZSinVIvDGUOAw4XfkQpYr6.jpg",
        "animeId": "naruto-shippuden-season-6-31910"
      },
      {
        "title": "Naruto Shippūden",
        "rating": "8.5",
        "image": "https://image.tmdb.org/t/p/w500/6Xk2LsYYf4X1F5FDdjEFIE3egQb.jpg",
        "animeId": "naruto-shippuden-season-10-31910"
      },
      {
        "title": "Naruto Shippūden",
        "rating": "8.5",
        "image": "https://image.tmdb.org/t/p/w500/7AgoEvMWUdw6AJYARJO6DKiqM4y.jpg",
        "animeId": "naruto-shippuden-season-4-31910"
      }
    ]
  }
}
```

### Search Anime

```bash
GET /api/search
```

### 🔗 Endpoint

```bash
/api/search/?s={string}&page={Number}
```

#### Parameters

| Parameter | Parameter-Type | Data-Type | Description | Mandatory ? | Default |
| :-------: | :------------: | :-------: | :---------: | :---------: | :-----: |
|    `s`    |    `query`     |  string   |   keyword   |   Yes ✔️    |   --    |
|   `page`  |    `query`     |  Number   |   page no.  |    No ❌️    |    1    |

#### Example request

```javascript
import axios from "axios";
const resp = await axios.get("/api/search/?s=solo+leveling+season+2&page=1");
console.log(resp.data);
```

#### Sample response

```javascript
{
  "success": true,
  "message": "Data Scraped successfully!!",
  "results": {
    "current_page": 1,
    "total_pages": 4,
    "results": [
      {
        "title": "Solo Leveling",
        "rating": "8.6",
        "image": "https://image.tmdb.org/t/p/w500/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg",
        "animeId": "solo-leveling-season-1-127532"
      },
      {
        "title": "Secret Level",
        "rating": "7.4",
        "image": "https://image.tmdb.org/t/p/w500/856MRq23grNxpeVl1PdFgmmLiT0.jpg",
        "animeId": "secret-level-season-1-261579"
      },
      {
        "title": "Lockdown Zone: Level X",
        "rating": "6.8",
        "image": "https://image.tmdb.org/t/p/w500/8QDQY5yNW9vDR7hK2DlLgGcIdHO.jpg",
        "animeId": "lockdown-zone-level-x-season-1-261135"
      },
      {
        "title": "Vermeil in Gold",
        "rating": "7.2",
        "image": "https://image.tmdb.org/t/p/w500/fSpis6z0uBXjR3bFEHgQ3zvbArd.jpg",
        "animeId": "vermeil-in-gold-season-1-194774"
      },
      {
        "title": "Avengers Assemble",
        "rating": "7.6",
        "image": "https://image.tmdb.org/t/p/w500/3hDR6u7vy0UgFp64KwzWCj73TKm.jpg",
        "animeId": "avengers-assemble-season-1-59427"
      },
      {
        "title": "Code Geass: Lelouch of the Rebellion",
        "rating": "8.3",
        "image": "https://image.tmdb.org/t/p/w500/jSk1zsthAJ16F4i8e3LDXPwlrk2.jpg",
        "animeId": "code-geass-lelouch-of-the-rebellion-season-1-31724"
      },
      {
        "title": "Let This Grieving Soul Retire",
        "rating": "6.9",
        "image": "https://image.tmdb.org/t/p/w500/egViTAdBqUyUFI2sIBsGbnH5Sun.jpg",
        "animeId": "let-this-grieving-soul-retire-season-2-258579"
      },
      {
        "title": "Loonatics Unleashed",
        "rating": "7.9",
        "image": "https://image.tmdb.org/t/p/w500/zI4XIWf6mImzmwKqyqKbodguDgI.jpg",
        "animeId": "loonatics-unleashed-season-1-1977"
      },
      {
        "title": "Delicious in Dungeon",
        "rating": "8.5",
        "image": "https://image.tmdb.org/t/p/w500/9t3DYdGxK3i4WRzKvIZwJd4kBnr.jpg",
        "animeId": "delicious-in-dungeon-season-1-207784"
      },
      {
        "title": "The Seven Deadly Sins",
        "rating": "8.4",
        "image": "https://image.tmdb.org/t/p/w500/gxTojpKEOtue85EEFlozwRbDXwJ.jpg",
        "animeId": "the-seven-deadly-sins-season-5-62104"
      },
      {
        "title": "Tales of Wedding Rings",
        "rating": "7.3",
        "image": "https://image.tmdb.org/t/p/w500/l6yWQrdFG30xJzBVMHTIgONI8vu.jpg",
        "animeId": "tales-of-wedding-rings-season-1-218493"
      },
      {
        "title": "Trinity Seven",
        "rating": "7",
        "image": "https://image.tmdb.org/t/p/w500/mv6IyUnNJzZ3OTjFDpy0ghyKlLj.jpg",
        "animeId": "trinity-seven-season-1-61460"
      },
      {
        "title": "I've Been Killing Slimes for 300 Years and Maxed Out My Level",
        "rating": "7.9",
        "image": "https://image.tmdb.org/t/p/w500/wJ2ItpknonIhvuq7aNVBxF4rTFB.jpg",
        "animeId": "i-ve-been-killing-slimes-for-300-years-and-maxed-out-my-level-season-2-99073"
      },
      {
        "title": "The Wrong Way to Use Healing Magic",
        "rating": "7.8",
        "image": "https://image.tmdb.org/t/p/w500/5yGNrE3vuKb1vRrOoFIvja32Oho.jpg",
        "animeId": "the-wrong-way-to-use-healing-magic-season-1-131365"
      }
    ]
  }
}
```

### Specific Anime Information

```bash
GET /api/info/
```

#### 🔗 Endpoint

```javascript
/api/info/?id={string}
```
#### Parameters

| Parameter | Parameter-Type | Data-Type | Description | Mandatory ? | Default |
| :-------: | :------------: | :-------: | :---------: | :---------: | :-----: |
|   `id`    |    `query`     |   string  |   animeId   |    yes ✔️   |    --   |

#### Example request

```javascript
import axios from "axios'
const resp = await axios.get("/api/info/?id=hana-kimi-season-1-254492")
console.log(resp.data)
```
```javascript
{
  "success": true,
  "message": "Data Scraped successfully!!",
  "results": {
    "title": "Hana-Kimi",
    "poster": "https://image.tmdb.org/t/p/w500/wCZn0Is62Tx4HC9WuFGYysjeHCx.jpg",
    "episodes": "9",
    "overview": "Mizuki Ashiya is on a mission: disguise herself as a boy and enroll in a male boarding school to meet her idol, high jump star Izumi Sano. But after successfully infiltrating the school, she discovers he’s suddenly quit the sport! Now Mizuki must dodge suspicion, protect her cover, and somehow reach the boy she came all this way for—all while surviving the chaos of an all-boys dorm!",
    "genres": [
      "slice of life",
      "anime",
      "love polygon",
      "Animation",
      "shoujo",
      "romance",
      "cross dressing",
      "Comedy",
      "based on manga",
      "high school"
    ],
    "languages": [
      "Hindi",
      "Japanese",
      "Tamil",
      "Telugu",
      "English"
    ],
    "duration": "24 min",
    "year": "2026",
    "downloadLink": "https://zone.toonmixindia.site/?id=695b96feeb802340a91cb876"
  }
}
```

### Anime Stream Info

```bash
GET /api/stream/
```

#### 🔗 Endpoint
```bash
/api/stream/?id={string}&ep={Number}
```

#### Parameters

| Parameter | Parameter-Type | Data-Type | Description | Mandatory ? | Default |
| :-------: | :------------: | :-------: | :---------: | :---------: | :-----: |
|    `id`   |    `query`     |  string   |   animeId   |   Yes ✔️    |   --    |
|    `ep`   |    `query`     |  Number   |   episode   |   Yes ✔️    |   --    |

#### Example request

```javascript
import axios from "axios";
const resp = await axios.get("/api/stream/?id=jujutsu-kaisen-season-3-95479&ep=6");
console.log(resp.data);
```
#### Sample response

```javaScript
{
  "success": true,
  "message": "Data Scraped Successfully!",
  "results": [
    {
      "id": "options-0",
      "url": "https://as-cdn21.top/video/f4901fe9f7579de134a23723831738ac"
    },
    {
      "id": "options-1",
      "url": "https://rubystm.com/e/m7l2jamth53s.html"
    },
    {
      "id": "options-2",
      "url": "https://gdmirrorbot.nl/embed/dbz7fzf"
    },
    {
      "id": "options-3",
      "url": "https://gdmirrorbot.nl/embed/kkh5et9"
    },
    {
      "id": "options-4",
      "url": "https://gdmirrorbot.nl/embed/h8saenc"
    },
    {
      "id": "options-5",
      "url": "https://short.icu/RS4P4llVv"
    },
    {
      "id": "options-6",
      "url": "https://cloudy.upns.one/#sodlvi"
    },
    {
      "id": "options-7",
      "url": "https://strmup.to/yFgls63a1ccv"
    },
    {
      "id": "options-8",
      "url": "https://gdmirrorbot.nl/embed/edag7cg"
    },
    {
      "id": "options-9",
      "url": "https://emturbovid.com/t/6984d48e0040b"
    },
    {
      "id": "options-10",
      "url": "https://vidmoly.net/embed-tr8887x2q7e4.html"
    }
  ]
}
```
