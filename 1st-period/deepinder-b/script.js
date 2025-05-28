<script>
document.querySelectorAll('a[href^="#"]').forEach (anchor = > {
  anchor.addEventListener("click"), function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
}
document.querySelectorAll("a[href^='https://codepen.io']").forEach(link) =>{
  link.addEventListener("click"), function(e){
    const href = this.getAttribute("href");
    if (!href || !href.startsWith("https://codepen.io")) {
      e.preventDefault();
      alert("This link appears to be broken or misformatted.");
    }
  }
}
</script>
