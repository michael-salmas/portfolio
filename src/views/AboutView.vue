<template>
  <div class="page">
    <div class="card">
      <img src="/public/aboutme.jpg" alt="Michael Salmas About Me" />
      <div>
        <h1>About me</h1>
        <p>
          I am a software engineer with a passion for front-end development. 
          I have experience in building web applications using modern technologies 
          favoring Vue. I am also experienced in backend development using Python 
          and postgres. I am always eager to learn new technologies, meet new people, 
          and improve my skills.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f0f0f0;
}

.card {
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding: 2rem;
  gap: 2rem;
  background-color: #fff;
  max-height: 80%;
  max-width: 60%;
  margin: auto;
}

.card > img {
  height: 600px;
  border-radius: 1rem;
}

.card > div {
  align-self: start;
}

</style>
