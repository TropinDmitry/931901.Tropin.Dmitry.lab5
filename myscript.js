function close_w(a)
{
    document.getElementById(a).style.display='none';
    for (let i = 1; i <= 3; i++)
        document.getElementById(i).style.display='none';
}

function open_w(a)
{
    document.getElementById(a).style.display='block';
    document.getElementById('bg').style.display='block';
}