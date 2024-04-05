import React, { useEffect } from 'react';

function AnimatedBackground() {
  useEffect(() => {
    const canvas = document.getElementById('stars');
    const context = canvas.getContext('2d');

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    canvas.width = windowWidth;
    canvas.height = windowHeight;

    const maxRadius = 2;
    const maxSpeed = 0.5;
    const stars = [];

    function Star() {
      this.x = Math.random() * windowWidth;
      this.y = Math.random() * windowHeight;
      this.radius = Math.random() * maxRadius;
      this.speed = Math.random() * maxSpeed;
    }

    Star.prototype.draw = function() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fillStyle = 'rgba(255, 255, 255, 0.5)';
      context.fill();
    }

    Star.prototype.update = function() {
      this.x -= this.speed;
      if (this.x < 0) {
        this.x = windowWidth;
      }
    }

    function createStars() {
      for (let i = 0; i < 100; i++) {
        stars.push(new Star());
      }
    }

    function animate() {
      context.clearRect(0, 0, windowWidth, windowHeight);
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animate);
    }

    createStars();
    animate();

    const resizeListener = () => {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
      canvas.width = windowWidth;
      canvas.height = windowHeight;
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return <canvas id="stars" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></canvas>;
}

export default AnimatedBackground;
