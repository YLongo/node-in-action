<template>
    <div class="home">
        <h1>{{msg}}</h1>
        <ul>
            <li v-for="rs in results" :key="rs.id">
                <div class="m-content inl-block">
                    <span class="span-left">id:&nbsp;&nbsp;{{rs.id}}</span>
                    <span class="span-left">城市名称:&nbsp;&nbsp;{{rs.name}}</span>
                    <span class="span-left">邮编:&nbsp;&nbsp;{{rs.zipcode}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'home',
    data() {
        return {
            msg: 'city lists',
            results: []
        };
    },
    created: function() {
        let url = "https://api.jisuapi.com/area/province?appkey=";
        let myappkey = '8db15f4d5a5370da';
        let json_url = url + myappkey;

        this.$http.jsonp(
            json_url,
            {},
            {
                headers: {},
                emulateJSON: true
            }
        ).then(
            function(response) {
                this.results = JSON.parse(response.bodyText).result;
                // console.log(this.results);
                console.log('home');
            },
            function(response) {
                console.log(response);
            }
        );
    }
}

</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li {
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
  text-align: left;
}

.inl-block {
  display: inline-block;
}

.m-content {
  margin-left: 8px;
}

span.span-left {
  margin-left: 320px;
}
</style>
