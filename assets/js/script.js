// save button click stores information from text area to local storage
$(document).ready(function(){
    $('.saveBtn').on('click', function(){
        var time = $(this).parent().attr('id')
        var value = $(this).siblings('textarea').val()
        console.log(value, time)
    localStorage.setItem(time, value)
    })

    function storeTextArea() {
        localStorage.setItem('textarea')
        localStorage.getItem('textarea')
    }

    // update text area to remove past events
    function hourUpdater(){
        var currentHour = moment().hours()
        $('.time-block').each(function(){
            var blockHour = parseInt($(this).attr('id').split('-')[1])
            if (blockHour< currentHour){
                $(this).addClass('past')
            }else if (blockHour === currentHour) {
                $(this).removeClass('past')
                $(this).addClass('present')
            }else {
                $(this).addClass('future')
                $(this).removeClass('past')
                $(this).removeClass('present')
            }
        })
    }

    hourUpdater()
    // set time to update once every hour

    setInterval(hourUpdater,3600000)
    // retrieve stored events when time is updated each hour
    $('#hours-9').val(localStorage.getItem('hours-9'))
    $('#hours-10').val(localStorage.getItem('hours-10'))
    $('#hours-11').val(localStorage.getItem('hours-11'))
    $('#hours-12').val(localStorage.getItem('hours-12'))
    $('#hours-1').val(localStorage.getItem('hours-1'))
    $('#hours-2').val(localStorage.getItem('hours-2'))
    $('#hours-3').val(localStorage.getItem('hours-3'))
    $('#hours-4').val(localStorage.getItem('hours-4'))
    $('#hours-5').val(localStorage.getItem('hours-5'))

    // when calendar is opened, current date is displayed at top
    $("#currentDay").text(moment().format('llll'))
})

