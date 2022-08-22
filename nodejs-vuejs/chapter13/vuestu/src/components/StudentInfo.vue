<template>
    <div>
        <h3>{{ msg }}</h3>
        <h4>student scores table</h4>
        <table>
            <tr>
                <th>no</th>
                <th>id</th>
                <th>name</th>
                <th>gender</th>
                <th>chinese</th>
                <th>math</th>
                <th>english</th>
                <th>admin</th>
            </tr>
            <tr v-for="(s, index) in stu" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ s.id }}</td>
                <td>{{ s.name }}</td>
                <td>{{ s.gender }}</td>
                <td>{{ s.chinese }}</td>
                <td>{{ s.math }}</td>
                <td>{{ s.english }}</td>
                <td>
                    <router-link to="/insert" active-class="active">
                        insert
                    </router-link>
                    <router-link :to="'/edit/' + s.id" active-class="active">
                        edit
                    </router-link>
                    <a href @click="del_stu_info(s.id)" active-class="active">
                        del
                    </a>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: 'studentinfo',
    data() {
        return {
            msg: 'welcome to student management app'
        };
    },
    computed: {
        stu: function () {
            let len = localStorage.length;
            let stuinfo;
            let stu = Array();

            for (let i = 0; i < len; i++) {
                let stukey = localStorage.key(i);
                if (stukey.substr(0, 3) == 'stu') {
                    stuinfo = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    stu.push(stuinfo);
                }
            }

            return stu;
        }
    },
    methods: {
        del_stu_info: function (stuid) {
            localStorage.removeItem("stu" + stuid);
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

table {
    width: 98%;
    margin: 16px 0;
    border-collapse: collapse;
    border: 0;
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