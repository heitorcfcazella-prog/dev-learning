import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")    # dataset pronto
sns.scatterplot(data=tips, x="total_bill", y="tip", hue="sex")
plt.show()

sns.histplot(tips["total_bill"], bins=20, kde=True)
plt.show()
