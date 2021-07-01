$(document).ready(function () {

    const fakeData = Array.from({ length: 200 }, (_v, index) => {
        return (
            `
            <tr>
                <td>MF${index}</td>
                <td>Vũ Long Vũ</td>
                <td>Nam</td>
                <td>18/11/2000</td>
                <td>0383468075</td>
                <td>longvu10a1@gmail.com</td>
                <td>Fresher</td>
                <td>Phòng sản xuât</td>
                <td>3.000.000</td>
                <td>Full time</td>
            </tr>`
        )
    });

    setTimeout(() => {
        $(".grid table tbody").html(fakeData);
    }, 1000);

    $(".navbar .toogler-icon").click(function (e) {
        e.preventDefault();
        $(".navbar-content").hide();
        $(".thumb-navbar-content").show("slow");
        $(".content").animate(
            {
                left: "45px",
                width:"100%",
            },
            1000,
            () => {
                $(".content").css("width","calc(100% - 45px)")
            }
        )
    });
});