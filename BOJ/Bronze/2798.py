# [BOJ] 2798. 블랙잭
# m을 넘지 않으면서 m에 최대한 가까운 카드 3장 합 구하기

n, m = map(int, input().split())    # n: 카드의 개수
cards = list(map(int, input().split()))  # n장의 카드를 list에 저장
cards.sort()  # 오름차순으로 정렬

ans = 0  # m을 넘지 않으면서 m에 최대한 가까운 값 저장
# i < j < k => 리스트의 인덱스 / 조합 개념 이용
for i in range(n-2):
    for j in range(i+1, n-1):
        for k in range(j+1, n):
            if ans < cards[i] + cards[j] + cards[k] <= m:  # 구하고자 하는 값의 범위
                ans = cards[i] + cards[j] + cards[k]       # 값 갱신

print(ans)
