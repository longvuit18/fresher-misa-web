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

    /**
     * ấn vào toggle để ẩn và hiện navbar
     */
    $(".navbar .toogler-icon").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("thumb-navbar-active")) {
            $(".navbar-content").show();
            $(".thumb-navbar-content").css("display", "none");
            $(this).removeClass("thumb-navbar-active");
            const newWidth = $(".content").width();
            $(".content").animate(
                {
                    left: "221px",
                },
                500,
                () => {
                    $(".content").css("width", "calc(100% - 221px)")
                }
            )
        } else {
            $(this).toggleClass("thumb-navbar-active");
            $(".navbar-content").css("display", "none");
            $(".thumb-navbar-content").show();
            
            $(".content").animate(
                {
                    left: "52px",
                    width: "100%",
                },
                500,
                () => {
                    $(".content").css("width", "calc(100% - 52px)")
                }
            )
        }
    });

    $(".thumb-navbar-content .nav-item .nav-icon").each(function (index, element) {
        
        
    });

});