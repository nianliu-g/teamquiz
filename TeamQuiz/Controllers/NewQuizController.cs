using Microsoft.AspNetCore.Mvc;

namespace TeamQuiz.Controllers
{
    public class NewQuizController : Controller
    {
        public IActionResult CreateNewQuiz()
        {
            return View();
        }
    }
}