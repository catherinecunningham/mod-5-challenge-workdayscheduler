// Global Variables
$(document).ready(function(){
    $('.saveBtn').on('click', function(){
        var time = $(this).parent().attr('id')
        var value = $(this).siblings('description').val()
        localStorage.setItem(time, value)
    })
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
    setInterval(hourUpdater,3600000)
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



// time blocks with standard business hours when scroll down

// time blocks are color coded to show past, present, or future

// when time block is clicked, can schedule an event

// click save button for time block, text for that event is saved in local storage

// refresh the page, saved events persist

