from flask import Blueprint, render_template
from flask_login import login_required

calculator_bp = Blueprint("calculator", __name__)


@calculator_bp.route("/calculator")
@login_required
def index():
    return render_template('calculator/index.html')