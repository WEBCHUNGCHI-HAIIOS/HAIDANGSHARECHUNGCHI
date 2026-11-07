
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Planet3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    const planetGroup = new THREE.Group();
    scene.add(planetGroup);

    // Hành tinh chính
    const geometry = new THREE.SphereGeometry(
      1.35,
      96,
      96
    );

    const material = new THREE.MeshStandardMaterial({
      color: 0x183f8a,
      metalness: 0.65,
      roughness: 0.38,
      emissive: 0x102c6b,
      emissiveIntensity: 0.65
    });

    const planet = new THREE.Mesh(
      geometry,
      material
    );

    planetGroup.add(planet);

    // Lưới năng lượng
    const wireGeometry = new THREE.SphereGeometry(
      1.37,
      32,
      24
    );

    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x76ddff,
      wireframe: true,
      transparent: true,
      opacity: 0.13
    });

    const wireSphere = new THREE.Mesh(
      wireGeometry,
      wireMaterial
    );

    planetGroup.add(wireSphere);

    // Khí quyển
    const atmosphereGeometry =
      new THREE.SphereGeometry(1.48, 64, 64);

    const atmosphereMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x58caff,
        transparent: true,
        opacity: 0.10,
        side: THREE.BackSide
      });

    const atmosphere = new THREE.Mesh(
      atmosphereGeometry,
      atmosphereMaterial
    );

    planetGroup.add(atmosphere);

    // Ánh sáng
    const ambient = new THREE.AmbientLight(
      0x8dbbff,
      1.7
    );

    scene.add(ambient);

    const mainLight = new THREE.PointLight(
      0x72dfff,
      45,
      30
    );

    mainLight.position.set(4, 3, 5);
    scene.add(mainLight);

    const purpleLight = new THREE.PointLight(
      0x8b48ff,
      30,
      25
    );

    purpleLight.position.set(-4, -2, 3);
    scene.add(purpleLight);

    // Quỹ đạo
    const orbitGeometry =
      new THREE.TorusGeometry(1.85, 0.008, 8, 160);

    const orbitMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x82dcff,
        transparent: true,
        opacity: 0.65
      });

    const orbit = new THREE.Mesh(
      orbitGeometry,
      orbitMaterial
    );

    orbit.rotation.x = Math.PI / 2.7;
    orbit.rotation.y = 0.3;

    planetGroup.add(orbit);

    // Hạt sao
    const starCount = 1200;
    const starPositions = new Float32Array(
      starCount * 3
    );

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] =
        (Math.random() - 0.5) * 18;

      starPositions[i * 3 + 1] =
        (Math.random() - 0.5) * 18;

      starPositions[i * 3 + 2] =
        (Math.random() - 0.5) * 12;
    }

    const starGeometry =
      new THREE.BufferGeometry();

    starGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(
        starPositions,
        3
      )
    );

    const starMaterial =
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.025,
        transparent: true,
        opacity: 0.8
      });

    const stars = new THREE.Points(
      starGeometry,
      starMaterial
    );

    scene.add(stars);

    // Điều khiển bằng cảm ứng và chuột
    let dragging = false;
    let previousX = 0;
    let previousY = 0;
    let velocityX = 0;
    let velocityY = 0;

    const pointerDown = (event) => {
      dragging = true;
      previousX = event.clientX;
      previousY = event.clientY;
      renderer.domElement.setPointerCapture(
        event.pointerId
      );
    };

    const pointerMove = (event) => {
      if (!dragging) return;

      const deltaX = event.clientX - previousX;
      const deltaY = event.clientY - previousY;

      velocityY = deltaX * 0.005;
      velocityX = deltaY * 0.005;

      planetGroup.rotation.y += velocityY;
      planetGroup.rotation.x += velocityX;

      previousX = event.clientX;
      previousY = event.clientY;
    };

    const pointerUp = () => {
      dragging = false;
    };

    const canvas = renderer.domElement;

    canvas.style.touchAction = 'pan-y';
    canvas.style.cursor = 'grab';

    canvas.addEventListener(
      'pointerdown',
      pointerDown
    );

    canvas.addEventListener(
      'pointermove',
      pointerMove
    );

    canvas.addEventListener(
      'pointerup',
      pointerUp
    );

    canvas.addEventListener(
      'pointercancel',
      pointerUp
    );

    // Kích thước màn hình
    const resize = () => {
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    // Animation
    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!dragging) {
        planetGroup.rotation.y += 0.0018;
        planetGroup.rotation.y += velocityY * 0.04;
        planetGroup.rotation.x += velocityX * 0.04;

        velocityX *= 0.94;
        velocityY *= 0.94;
      }

      stars.rotation.y += 0.00015;

      wireSphere.rotation.y -= 0.0004;

      renderer.render(scene, camera);
    };

    animate();

    // Dọn tài nguyên
    return () => {
      cancelAnimationFrame(animationId);

      observer.disconnect();

      canvas.removeEventListener(
        'pointerdown',
        pointerDown
      );

      canvas.removeEventListener(
        'pointermove',
        pointerMove
      );

      canvas.removeEventListener(
        'pointerup',
        pointerUp
      );

      canvas.removeEventListener(
        'pointercancel',
        pointerUp
      );

      scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }

        if (object.material) {
          const materials = Array.isArray(
            object.material
          )
            ? object.material
            : [object.material];

          materials.forEach((item) => {
            item.dispose();
          });
        }
      });

      renderer.dispose();

      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="planet-3d"
      style={{
        width: '100%',
        height: '480px',
        position: 'relative',
        overflow: 'hidden',
        touchAction: 'pan-y'
      }}
      aria-label="Hành tinh 3D Hồng Hải MMO"
    />
  );
}
