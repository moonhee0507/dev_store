# 개발자를 위한 오픈마켓 「dev store」

```
👩🏻‍💻 데브 스토어는 개발자 물품을 파는 온라인 쇼핑몰입니다.

🚀 바닐라 자바스크립트 SPA 프로젝트입니다.

💻 구매자와 판매자 계정으로 가입 후 물건을 구매하거나 등록할 수 있습니다.

👀 장바구니 및 판매자 대시보드 기능, 상품 검색 및 뷰 모드 전환 기능이 있습니다.
```

#### [배포 URL]

-   URL: https://devstore.work/
-   구매자 계정
    -   ID: devbuyer
    -   PW: devbuyer1
-   판매자 계정
    -   ID: devseller
    -   PW: devseller1

#### [기술]

-   FrontEnd: vanilla JavaScript, Sass
-   BackEnd: 제공된 API 사용
-   AWS Amplify, vite

#### [개발 환경]

-   vscode

#### [실행 방법]

```bash
  npm install
  npm start
```

#### [컬러 시스템]

-   구글 Material Design의 컬러 시스템을 참고하여 Scss 변수 네이밍 반영

<img src="https://user-images.githubusercontent.com/102460056/203055451-1be76d94-ae67-4d16-bbfe-6a693df4c70d.PNG" width="800">

<br>

<h2>1. 페이지 소개</h2>

<h3 align=center>⛪ 홈</h3>

-   상품검색 기능: 키워드 입력시 키워드를 포함한 상품 확인이 가능합니다.
-   비회원 / 구매회원 / 판매회원에 따른 `nav` 구현
    -   비회원: 장바구니, 로그인 버튼
    -   구매회원: 장바구니, 로그아웃 버튼
    -   판매회원: 판매자 센터, 로그아웃 버튼
-   슬라이드
    -   pager와 버튼을 클릭하여 슬라이드 이동이 가능합니다.
    -   `mouseenter`, `mouseleave` 이벤트를 사용하여 슬라이드 위에 커서를 올리면 다음 페이지로 넘어가지 않습니다.
-   상품카드
    -   `Intersection Observer API`를 사용하여 사용자의 체감 로딩시간(TTI)을 단축했습니다.
    -   `MouseEvent.layerX`를 사용하여 상품카드 클릭 시 물결효과가 발생합니다.

<div align="center">
    <img src="https://user-images.githubusercontent.com/102460056/203058248-a6547d26-bdf4-4502-a18d-52c98fbaa794.gif" alt="" width=800>

</div>

<br>

<br>

<h3 align=center>🔑 로그인 / 회원가입</h3>

-   아이디나 비밀번호 미입력 시 로그인 버튼이 비활성화됩니다.
-   아이디 / 비밀번호가 불일치 시 비밀번호 입력창에 focus 이벤트가 발생하고 빈칸 처리됩니다.
-   구매회원 및 판매회원 불일치 시 로그인 유형 확인요청 문구가 나타납니다.
-   로그인 성공 시 로그인하기 이전 페이지로 이동합니다.

-   회원가입 시 모든 입력을 완료하고 동의하기 체크를 눌러 버튼이 활성화됩니다.
-   회원가입 완료 시 로그인 페이지로 이동합니다.

<div align=center>

|                                                          **로그인**                                                          |                                                         **구글 계정으로 로그인**                                                          |
| :--------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/102460056/210270416-f0c5836b-3651-400b-8e38-422d389062ef.PNG" width=400> | <img src="https://user-images.githubusercontent.com/102460056/210270545-4632c2dc-ddba-42d7-a452-2739d70a62f2.PNG"  width=400> |

</div>

<br>


<br>

<h3 align=center>🎬 상품 상세</h3>

-   상품이미지가 잘려 보이지 않도록 `object-fit: contain;` 처리를 해주었습니다.
-   `+` 버튼과 `-` 버튼을 사용해야만 수량 변경이 가능합니다.
-   수량을 변경 시, 현재 상품의 재고 수량을 초과하면 `+` 버튼이 비활성화됩니다.
-   선택된 옵션에 맞춰서 가격을 계산하고, 총 가격이 나타납니다.
-   `바로 구매` 클릭 시, 결제 페이지로 이동합니다.
-   `장바구니` 클릭 시, 장바구니 페이지로 이동합니다.

<div align="center">
    <img src="https://user-images.githubusercontent.com/102460056/203061174-e3faf101-4af2-4472-9a1a-b79a016a203d.gif" alt="" width=800>

</div>

<br>

<br>

<h3 align=center>🛒 장바구니</h3>

-   장바구니에서 상품의 수량을 수정할 때, `+`나 `-` 버튼을 누르면 수량 수정을 위한 모달창이 나타납니다. 모달창에서 상품의 재고 수량을 초과하면 `+` 버튼은 비활성화됩니다.
-   선택된 정보만 총 상품금액과 할인, 배송비가 적용되어 총 결제할 가격이 나타납니다.
-   상품의 `x` 버튼을 클릭할 시 상품 삭제를 재확인하는 모달 창이 중앙에 나타납니다.
-   상품 삭제를 재확인하는 모달의 확인 버튼을 클릭하면 상품이 삭제됩니다.
-   이미 장바구니에 넣은 제품을 다시 넣는 경우, 이전 수량과 합쳐집니다.

<div align="center">
    <img src="https://user-images.githubusercontent.com/102460056/203064669-f9a975eb-456c-47c3-b67c-ddecfb3fb4d6.gif" alt="" width=800>
</div>

<br>

<br>

<h3 align=center>💳 주문 / 결제</h3>

-   주문/결제 페이지에서 상품 정보는 수정 불가합니다.
-   배송 정보 칸에 주문자 정보와 배송지 정보를 입력할 수 있습니다.
-   모든 입력이 완료되어야 결제하기 버튼이 활성화됩니다.
-   결제하기 버튼을 누르면 결제가 진행됩니다.
-   다음 우편번호 조회 API를 사용하여 주소를 입력합니다.
-   배송 메시지 기본값이 등록되어 있고 직접 작성과 드롭박스 내용 중 선택이 가능합니다.

<div align="center">
    <img src="https://user-images.githubusercontent.com/102460056/203074336-89caea05-d5b8-4c6a-95b7-3cf2a16424c1.gif" alt="" width=800>
</div>

<br>

<br>

<h3 align=center>👔 판매자센터</h3>

-   상품 업로드 페이지에서 등록한 상품들이 판매 상품 목록에 보여집니다.
-   수정 버튼을 누르면 상품 업로드 페이지로 이동하며, 상품 업로드 페이지에 해당하는 상품의 등록 내용이 보여집니다.
-   삭제 버튼을 누르면 삭제를 재확인하는 모달이 나타납니다. 삭제 버튼을 누르면 등록된 상품이 삭제됩니다.

<div align="center">
    <img src="https://user-images.githubusercontent.com/102460056/203088934-93c55b09-496a-44ac-8496-78458ad5d271.gif" alt="" width=800>
</div>

<br>

<br>

<h3 align=center>📲 상품 등록</h3>

-   상품 이미지를 등록할 수 있습니다.(상세페이지와 상품목록페이지에서 보이는 이미지)

*   상품명, 판매가, 기본 배송비, 재고 모두 입력 가능 합니다. 작성하지 않을 경우 0으로 등록됩니다.
*   상품명은 20자로 제한됩니다.
*   저장하기 버튼을 누르면 상품 등록이 완료되며 상품 상세 페이지로 이동합니다.
*   상품 상세 정보를 입력할 수 있습니다.

<div align="center">
    <img src="https://user-images.githubusercontent.com/102460056/192026508-cf52762c-303e-4862-a159-1832620f8251.jpg" alt="" width=800>
</div>

<br>

<br>

<h3 align=center>🔎 검색결과</h3>

-   sort를 이용한 정렬 함수를 모듈화하여 정렬기능을 사용할 수 있습니다.
-   홈 화면의 `productCard` 컴포넌트를 재사용하여 grid 기능을 구현했습니다. 기본 뷰 모드는 리스트 형식입니다.

<b>키워드 포함 상품 리스트</b>

<div align="center">
    <img src="https://user-images.githubusercontent.com/102460056/203076987-29db26be-1bde-4068-9852-1de42e6c9328.gif" alt="" width=800>
</div>

<br>

<b>정렬: 낮은 가격순, 높은 가격순, 등록일순</b>

<div align="center">
    <img src="https://user-images.githubusercontent.com/102460056/203077964-6b628d96-eaf8-4ee0-b703-940b454dbede.gif" alt="" width=800>
</div>

<br>

<b>뷰 모드: 리스트 형식, 그리드 형식</b>

<div align="center">
    <img src="https://user-images.githubusercontent.com/102460056/203077820-96a1d0df-cbd7-4cca-874e-2278ef0619de.gif" alt="" width=800>

</div>

<br>

<br>

<h3 align=center>🎐 스토어 방문</h3>

-   홈 화면이나 검색결과에서 `전체상품 보기` 클릭 시 해당 판매자의 스토어에 방문할 수 있습니다.

<div align="center">
    <img src="https://user-images.githubusercontent.com/102460056/203079306-8652f247-867c-4444-9ca8-229d10c9fc10.gif" alt="" width=800>
</div>

<br>

<hr>

<br>

<h2>2. Defendency</h2>

<div align=center>

<img src="https://user-images.githubusercontent.com/102460056/202998825-78141c5f-c807-4c4c-be8e-9fe66b1ed3e0.PNG" width="800">

</div>

<br>

<h2>3. 폴더트리</h2>

-   amplify/ : Amplify CLI 설치
-   fonts/ : 폰트 설치 디렉토리
-   js/ : Auth, API등 공통 처리기능, Components
-   public/ : assets, logic 디렉토리
-   scss/ : 스타일 디렉토리
-   utils/ : Routes 디렉토리

```
📦js
 ┣ 📂auth
 ┃ ┗ 📜loginCallback.js
 ┃
 ┣ 📂common
 ┃ ┣ 📜api.js
 ┃ ┣ 📜constants.js
 ┃ ┣ 📜infiniteScroll.js
 ┃ ┣ 📜loading.js
 ┃ ┣ 📜sort.js
 ┃ ┗ 📜thousands.js
 ┃
 ┣ 📂components
 ┃ ┣ 📂button
 ┃ ┣ 📂cart
 ┃ ┣ 📂common
 ┃ ┣ 📂footer
 ┃ ┣ 📂header
 ┃ ┣ 📂login
 ┃ ┣ 📂modal
 ┃ ┣ 📂payment
 ┃ ┣ 📂search
 ┃ ┣ 📂slide
 ┃ ┣ 📂store
 ┃ ┗ 📂upload
 ┃
 ┣ 📂pages
 ┃ ┣ 📜cart.js
 ┃ ┣ 📜center.js
 ┃ ┣ 📜home.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜login.js
 ┃ ┣ 📜payment.js
 ┃ ┣ 📜productDetail.js
 ┃ ┣ 📜search.js
 ┃ ┣ 📜signup.js
 ┃ ┣ 📜store.js
 ┃ ┗ 📜upload.js
 ┃
 ┗ 📜index.js
```

<br>
  
<h2>4. 트러블 슈팅</h2>

-   장바구니 목록 보기(GET) 요청과 장바구니에 물건 넣기(POST), 수량 수정하기(PUT) 요청을 같은 함수를 사용하고 싶었는데, `fetch`로 `GET` 메서드를 사용할 때는 `body`가 있으면 요청이 보내지지 않는 문제가 있었습니다. body를 조건에 따라 붙일 수 있는 방법을 알아보다가 이 방법을 사용해서 해결할 수 있었습니다.

```js
export async function reqCart(
    method,
    product_id,
    quantity,
    cart_item_id,
    is_active
) {
    const res = await fetch(
        `${API_URL}/cart/${cart_item_id ? cart_item_id + "/" : ""}`,
        {
            method: method,
            headers: {
                Authorization: `JWT ${window.localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            ...((method === "POST" || method === "PUT") && {
                body: JSON.stringify({
                    product_id: product_id,
                    quantity: quantity,
                    check: true,
                    ...(is_active && {
                        is_active: is_active,
                    }),
                }),
            }),
        }
    );
    return res;
}
```

-   [블로그](https://velog.io/@sjmh0507/JavaScript-API-모듈-재사용을-위한-조건부-key-처리)에서 자세한 내용 확인할 수 있습니다.

<br>

-   응답 데이터 개수에 제한이 있어 상품을 가져오게 되면 15개까지만 가져와지는 문제가 있었습니다. 그래서 `/products/?page=${page}`를 활용해 1부터 (전체 상품수 / 15 + 1)까지 순환하여 전체 상품을 가져오도록 처리했습니다.

```js
async getProductsData() {
    const token = window.localStorage.getItem("token");
    let count = parseInt(window.localStorage.getItem("sellerCount"));
    for (let i = 1; i < count / 15 + 1; i++) {
        const data = await getSeller(token, i);
        this.products = await data.results;
        this.productsOnAllPages.push(...this.products);
    }
}
```

-   [블로그](https://velog.io/@sjmh0507/JavaScript-교차점에서-다음-페이지를-불러오는-무한스크롤-기능-추가하기-6sigwyzz)에서 자세한 내용 확인할 수 있습니다.

<br>

-   장바구니의 체크박스 제목행과 각 행의 체크여부의 관계에 따라서 적절히 구현하는데 어려움이 있었습니다. 특히 각 행의 체크가 모두 해제된 상태에서 사용자가 직접 체크해서 모두 체크되는 경우에 제목행이 체크되도록 하는 것이 문제였으나, `querySelectorAll`을 사용하여 해당 `NodeList`를 배열로 바꿔(`Array.from`) 클래스명만 남기고 처리를 했습니다. 배열의 맨앞 요소는 제목행이기 때문에 `shift`로 제거하고 모든 배열에 fill이 있는지 확인하여 제목행 체크박스를 컨트롤 했습니다.

```js
for (let i = 0; i < allCheckBox.length; i++) {
  allCheckBox[i].addEventListener("click", () => {
    // 1) NodeList 배열화
    const arrAllCheckBox = Array.from(allCheckBox);
    // 2) className 배열 변수화
    const arrClassNameAllCheckBox = arrAllCheckBox.map(
        (item) => item.className
    );
    // 3) 배열 맨앞 요소 제거
    arrClassNameAllCheckBox.shift();
    // 4) 모든 배열에 fill 문자가 있는지 확인
    let everyElHasFill = arrClassNameAllCheckBox.every((el) => {
        return el.includes("fill");
    }
  }
}
```

```js
everyElHasFill
    ? allCheckBox[0].classList.add("fill")
    : allCheckBox[0].classList.remove("fill");
```

-   [블로그](https://velog.io/@sjmh0507/JavaScript-장바구니-체크박스-때문에-힘들었다)에서 자세한 내용 확인할 수 있습니다.
