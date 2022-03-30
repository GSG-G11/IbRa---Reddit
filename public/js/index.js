const fetchPosts = () => {
  const request = {
    method: "GET",
  };
  return fetch("/posts", request)
    .then((result) => result.json())
    .then((res) => {
      console.log(res);
      createPost(res);
    });
};

const createElement = (tag, nameClass = "", text = "") => {
  const element = document.createElement(tag);
  element.className = nameClass;
  element.textContent = text;
  return element;
};

const createPost = (array) => {
    let count = 0;
  array.forEach((element) => {
    const post = document.createElement("div");
    post.classList.add("post");

    ///voteSec
    const voteSec = document.createElement("div");
    voteSec.classList.add("vote-sec");
    post.appendChild(voteSec);

    const vote = document.createElement("div");
    vote.classList.add("vote");
    voteSec.appendChild(vote);

    const upVote = document.createElement("i");
    upVote.classList.add("fa-solid");
    upVote.classList.add("fa-up");
    vote.appendChild(upVote);

    const voteP = document.createElement("p");
    voteP.textContent = 14
    vote.appendChild(voteP);

    const downVote = document.createElement("i");
    downVote.classList.add("fa-solid");
    downVote.classList.add("fa-down");
    vote.appendChild(downVote);

    //////////////////
    const postBody = document.createElement("div");
    postBody.classList.add("post-body");

    const subUserReward = document.createElement("div");
    subUserReward.classList.add("subUserReward");
    postBody.appendChild(subUserReward);

    const subImg = document.createElement("img");
    subImg.classList.add("subImg");
    subImg.src = "./img/reddit.png";
    subUserReward.appendChild(subImg);

    const sub = document.createElement("h6");
    sub.classList.add("sub");
    sub.textContent = "r/memes";
    subUserReward.appendChild(sub);

    const subTail = document.createElement("h6");
    subTail.classList.add("subTail");
    subTail.textContent = "• Posted by u/Kahmoosha 20 hours ago";
    subUserReward.appendChild(subTail);

    const rewards = document.createElement("h6");
    rewards.innerHTML =
      '<i class="fas fa-award"></i> <i class="fa-solid fa-crown"></i>';
    subUserReward.appendChild(rewards);

    const postText = createElement("div", "postText");

    const postTextP = createElement("p", "para");
    postTextP.textContent = array[count].content
    postText.appendChild(postTextP);
    postBody.appendChild(postText);

    const media = createElement("div", "media");

    const mediaImg = createElement("img");
    mediaImg.src ='https://upload.wikimedia.org/wikinews/en/7/7a/Minecraft_game_cover.jpeg' // array[count].media;
    media.appendChild(mediaImg);
    postBody.appendChild(media);

    const social = createElement("div", "social");

    const socialBtncomm = createElement("button", "social-btn");
    const faMessage = createElement("i", "fa-regular");
    faMessage.classList.add("fa-message");
    socialBtncomm.appendChild(faMessage);
    socialBtncomm.textContent = " 6.3k comments";
    social.appendChild(socialBtncomm);

    const socialBtnShare = createElement("button", "social-btn");
    const fsShare = createElement("i", "fa-thin");
    fsShare.classList.add("fa-share");
    socialBtnShare.appendChild(fsShare);
    socialBtnShare.textContent = "Share";
    social.appendChild(socialBtnShare);

    const socialBtnSave = createElement("button", "social-btn");
    // const fsBookMark = createElement("i", "fa-regular");
    // fsBookMark.classList.add("fa-bookmark");

    const fsBookMark = document.createElement("i");
    fsBookMark.classList.add("fa-regular", "fa-bookmark");

    socialBtnSave.appendChild(fsBookMark);
    socialBtnSave.textContent = "Save";
    social.appendChild(socialBtnSave);

    const socialBtnDots = createElement("button", "social-btn");
    socialBtnDots.textContent = " • • • ";
    social.appendChild(socialBtnDots);

    postBody.appendChild(social);
    ///

    const posts = document.getElementById("posts");
    post.appendChild(postBody);
    posts.appendChild(post);
  });
  count++
};

fetchPosts();

