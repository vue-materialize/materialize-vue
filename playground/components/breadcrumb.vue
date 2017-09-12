<template>
  <div>
    <div class="row">
      <nav>
        <div class="nav-wrapper">
          <div class="col s12">
            <mv-breadcrumb separator="/">
              <mv-breadcrumb-item to="/">First</mv-breadcrumb-item>
              <mv-breadcrumb-item to="/home">Second</mv-breadcrumb-item>
              <mv-breadcrumb-item>Third</mv-breadcrumb-item>
            </mv-breadcrumb>
          </div>
        </div>
      </nav>
      <nav>
        <div class="nav-wrapper">
          <div class="col s12">
            <mv-breadcrumb>
              <mv-breadcrumb-item to="/">First</mv-breadcrumb-item>
              <mv-breadcrumb-item to="/home">Second</mv-breadcrumb-item>
              <mv-breadcrumb-item>Third</mv-breadcrumb-item>
            </mv-breadcrumb>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
