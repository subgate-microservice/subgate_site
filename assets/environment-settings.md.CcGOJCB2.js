import{_ as i,c as a,o as n,ae as l}from"./chunks/framework.AELpvxz7.js";const g=JSON.parse('{"title":"Environment settings","description":"","frontmatter":{},"headers":[],"relativePath":"environment-settings.md","filePath":"environment-settings.md"}'),p={name:"environment-settings.md"};function t(e,s,h,k,E,r){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="environment-settings" tabindex="-1">Environment settings <a class="header-anchor" href="#environment-settings" aria-label="Permalink to &quot;Environment settings&quot;">​</a></h1><h2 id="environment-file" tabindex="-1">Environment file <a class="header-anchor" href="#environment-file" aria-label="Permalink to &quot;Environment file&quot;">​</a></h2><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Database</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DB_NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=subgate</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DB_USER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=postgres</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DB_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=qwerty</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DB_HOST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=localhost</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DB_PORT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=5432</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Server settings</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">HOST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=0.0.0.0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PORT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=3000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># First user</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">USER_EMAIL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=test@test.com</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">USER_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=qwerty</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">USER_APIKEY_TITLE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=Test apikey</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">USER_APIKEY_PUBLIC_ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=apikey_test_id</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">USER_APIKEY_SECRET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=test_secret</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Authentication settings</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AUTHENTICATION_CACHE_TIME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=3600</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AUTHENTICATION_TOKEN_LIFETIME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=86_400</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SECRET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=sample_secret</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Subscription manager</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SUBSCRIPTION_MANAGER_CHECK_PERIOD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=3600</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SUBSCRIPTION_MANAGER_BULK_LIMIT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Cleaners</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LOG_RETENTION_DAYS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=7</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DELIVERY_RETENTION_DAYS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=7</span></span></code></pre></div><h2 id="docker-compose" tabindex="-1">Docker compose <a class="header-anchor" href="#docker-compose" aria-label="Permalink to &quot;Docker compose&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  backend-server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./backend</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      dockerfile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Dockerfile</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    env_file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.env</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    depends_on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">postgres</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3000:3000&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  frontend-server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./front</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      dockerfile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Dockerfile</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    env_file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.env</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    depends_on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">backend-server</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;80:5000&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  postgres</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">postgres:alpine</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    env_file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.env</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">postgres-data:/var/lib/postgresql/data</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  postgres-data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span></code></pre></div>`,5)]))}const c=i(p,[["render",t]]);export{g as __pageData,c as default};
