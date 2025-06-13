<template>
  <div class="container">
    <header class="hero">
      <h1>Web3 & AI Industry Professional</h1>
      <p class="subtitle">Connecting Technology with Business Growth</p>
    </header>

    <section class="about">
      <h2>About Me</h2>
      <p>
        As a Web3 and AI industry professional, I specialize in driving growth and innovation at the intersection of blockchain technology and artificial intelligence. My expertise lies in building bridges between cutting-edge technology and business success.
      </p>
    </section>

    <section class="expertise">
      <h2>Areas of Expertise</h2>
      <div class="expertise-grid">
        <div class="expertise-card">
          <h3>Web3 Strategy</h3>
          <p>Blockchain technology implementation and community building</p>
        </div>
        <div class="expertise-card">
          <h3>AI Solutions</h3>
          <p>AI integration and optimization for business processes</p>
        </div>
        <div class="expertise-card">
          <h3>Growth Marketing</h3>
          <p>Data-driven marketing strategies for tech products</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 1rem;
  margin-bottom: 3rem;
}

h1 {
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  color: #a0a0a0;
  font-size: 1.2rem;
}

.about {
  margin-bottom: 3rem;
}

h2 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.expertise-card {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 0.5rem;
  transition: transform 0.3s ease;
}

.expertise-card:hover {
  transform: translateY(-5px);
}

h3 {
  color: #2d2d2d;
  margin-bottom: 1rem;
}

p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  
  .hero {
    padding: 2rem 0;
  }
  
  h1 {
    font-size: 2rem;
  }
}
</style>

