// Theme toggle and footer year. The page works without this file.
(function () {
    var root = document.documentElement;
    var btn = document.getElementById('theme-btn');

    function current() {
        var set = root.getAttribute('data-theme');
        if (set) return set;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function label() {
        if (btn) btn.textContent = current() === 'dark' ? 'Light' : 'Dark';
    }

    if (btn) {
        btn.addEventListener('click', function () {
            var next = current() === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            try { localStorage.setItem('theme', next); } catch (e) { }
            label();
        });
        label();
    }

    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
})();
