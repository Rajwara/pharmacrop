(function () {
  var TOKEN_KEY = 'pharmacrop_token';
  var USER_KEY = 'pharmacrop_user';

  function getToken() {
    try { return localStorage.getItem(TOKEN_KEY); } catch (e) { return null; }
  }

  function getUser() {
    try {
      var raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function setSession(token, user) {
    try {
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(user || {}));
    } catch (e) {}
  }

  function clearSession() {
    try {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    } catch (e) {}
  }

  function requireAuth() {
    var token = getToken();
    if (!token) {
      window.location.href = '/register?tab=login';
      return null;
    }
    return token;
  }

  function initials(user) {
    var first = (user && user.firstName ? user.firstName : '?')[0] || '';
    var last = (user && user.lastName ? user.lastName : '')[0] || '';
    var result = (first + last).toUpperCase();
    return result || 'HC';
  }

  function displayName(user) {
    if (!user) return 'Account';
    var name = ((user.firstName || '') + ' ' + (user.lastName || '')).trim();
    return name || user.displayName || user.email || 'Account';
  }

  function personalizeHeader() {
    var user = getUser();
    if (!user) return;
    var nameEl = document.querySelector('[data-dash-user-toggle] .cs_dash_user_name');
    var avatarEl = document.querySelector('[data-dash-user-toggle] .cs_dash_avatar');
    if (nameEl) nameEl.textContent = displayName(user);
    if (avatarEl) avatarEl.textContent = initials(user);
  }

  function wireLogout() {
    document.querySelectorAll('[data-logout-link]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        clearSession();
        window.location.href = '/';
      });
    });
  }

  window.PharmaCropAuth = {
    getToken: getToken,
    getUser: getUser,
    setSession: setSession,
    clearSession: clearSession,
    requireAuth: requireAuth,
    personalizeHeader: personalizeHeader,
    wireLogout: wireLogout,
    displayName: displayName,
    initials: initials,
  };
})();
