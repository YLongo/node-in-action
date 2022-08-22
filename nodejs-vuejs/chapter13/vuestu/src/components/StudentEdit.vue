<template>
    <div class="divCen">
        <h3>{{ msg }}</h3>
        <h4>
            student score edit
        </h4>
        <p class="p-right">
            <router-link to="/" active-class="active">back to home</router-link>
        </p>
        <table>
            <tr>
                <th>id</th>
                <td>
                    <input type="text" :value="id" readonly />
                </td>
            </tr>
            <tr>
                <th>name</th>
                <input type="text" v-model="name" />
            </tr>
            <tr>
                <th>gender</th>
                <input type="text" v-model="gender" />
            </tr>
            <tr>
                <th>chinese</th>
                <input type="text" v-model="chinese" />
            </tr>
            <tr>
                <th>math</th>
                <input type="text" v-model="math" />
            </tr>
            <tr>
                <th>english</th>
                <input type="text" v-model="english" />
            </tr>
        </table>
        <p>
            <button @click="btn_edit_stuinfo">edit to save</button>
        </p>
    </div>

</template>

<script>

export default {
    name: 'studentedit',
    data() {
        return {
            msg: 'welcome to student management app',
            id: "",
            name: "",
            gender: "",
            chinese: "",
            math: "",
            english: ""
        };
    },
    created: function () {
        this.id = this.$route.params.id;
        console.log("id=====: " + this.id);
        let stuinfo = JSON.parse(localStorage.getItem('stu' + this.id));

        this.name = stuinfo.name;
        this.gender = stuinfo.gender;
        this.chinese = stuinfo.chinese;
        this.math = stuinfo.math;
        this.english = stuinfo.english
    },
    methods: {
        btn_edit_stuinfo: function () {
            let ostu = {
                id: this.id,
                name: this.name,
                gender: this.gender,
                chinese: this.chinese,
                math: this.math,
                english: this.english
            };

            var key = 'stu' + ostu.id;
            var stu = JSON.stringify(ostu);
            localStorage.setItem(key, stu);
            this.$router.push({ path: '/info' });
        }
    }
}

</script>



<style scoped>
h3,
h4 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

input {
    width: 128px;
}

p {
    font-style: normal;
}

p.p-right {
    font-style: italic;
    text-align: right;
}

div.divCen {
    margin: 2px auto;
    width: auto;
}

table {
    width: 60%;
    margin: auto;
    border-collapse: collapse;
    border: 0;
    text-align: center;
}

th {
    background-color: #93daff;
    color: #000000;
}

th,
td {
    font-size: 0.95em;
    text-align: center;
    padding: 4px;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #c1e9fe;
    border-width: 1px 0 1px 0;
}

tr {
    border: 1px solid #c1e9fe;
}

tr:nth-child(odd) {
    background-color: #dbf2fe;
}

tr:nth-child(even) {
    background-color: #fdfdfd;
}
</style>
