module.exports = {
    color:function(){
        var colorArray = ['red','blue','green','pink'];
        var color = colorArray[Math.floor(Math.random() * colorArray.length)];
        return color;
    },
    earn:function(){
        var earn = [];
        var eraning =  Math.floor(Math.random() * (100000 - 15000) + 15000);
        var earn_arr = [];
        for (let i = 0; i < 8; i++) {
            earn_arr.push(Math.floor(Math.random() * (100 - 1) + 1));
        }
         earn.push({
            earn_Amount:eraning,
            earn_Arr :earn_arr
         })
        return earn;
    },
    complete: function(){
        var complete = [];
        var completeing = Math.floor(Math.random() * (100 - 20) + 20);
        var complete_arr = [completeing,100-completeing];
        complete.push({
            complete_Value: completeing,
            complete_Arr: complete_arr
        });
        return complete;
    },
    imp:function(){
        var imp = [];
        var impress = Math.floor(Math.random() * (50 -10) + 10);
        var imp_arr = [];
        for (let i = 0; i < 8; i++) {
            imp_arr.push(Math.floor(Math.random() * (50 -10) + 10));
        }
        imp.push({
            imp_Value : impress,
            imp_Arr:imp_arr
        });
        return imp;
    },
    demand:function(){
        var demand = [];
        var demanding = Math.floor(Math.random() * (50 +20) - 20);
        var demand_arr = [];
        for (let i = 0; i < 8; i++) {
            demand_arr.push(Math.floor(Math.random() * (50 +20) - 20));
        }
        demand.push({
            demanding_Value : demanding,
            demand_Arr:demand_arr
        });
        return demand;
    }
}